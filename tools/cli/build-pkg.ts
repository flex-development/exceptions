#!/usr/bin/env ts-node

import LogLevel from '@flex-development/log/enums/log-level.enum'
import type { TrextOptions } from '@flex-development/trext'
import { trext } from '@flex-development/trext'
import ncc from '@vercel/ncc'
import fs from 'fs/promises'
import path from 'node:path'
import replace from 'replace-in-file'
import rimraf from 'rimraf'
import type { BuildOptions as TsBuildOptions } from 'tsc-prog'
import * as tsc from 'tsc-prog'
import { logDiagnostics } from 'tsc-prog/dist/utils/log'
import ts from 'typescript'
import type { Argv } from 'yargs'
import type { BuildOptions } from '../helpers/build'
import build, { args as bargs } from '../helpers/build'
import logger from '../helpers/logger'
import { $PACKAGE, $WNS } from '../helpers/pkg'
import type { TsRemapOptions } from '../helpers/ts-remap'
import tsRemap from '../helpers/ts-remap'
import tsconfigCascade from '../helpers/tsconfig-cascade'

/**
 * @file CLI - Package Build Workflow
 * @module tools/cli/build-pkg
 */

export type BuildPkgOptions = BuildOptions & {
  /**
   * Bundle build output with [`@vercel/ncc`][1].
   *
   * [1]: https://github.com/vercel/ncc
   *
   * @default true
   */
  bundle?: boolean

  /** @see BuildPkgOptions.bundle */
  b?: BuildPkgOptions['bundle']

  /**
   * Specify module build formats.
   *
   * @default ['cjs','esm','types']
   */
  formats?: BuildPkgFormat[]

  /** @see BuildPkgOptions.formats */
  f?: BuildPkgOptions['formats']
}

export type BuildPkgArgs = Argv<BuildPkgOptions>
export type BuildPkgArgv = Exclude<BuildPkgArgs['argv'], Promise<any>>
export type BuildPkgFormat = 'cjs' | 'esm' | 'types'

export type BuildModuleFormatOptions = {
  build: TsBuildOptions
  trext: TrextOptions<'js', 'cjs' | 'mjs'>
  remap: TsRemapOptions
}

/** @property {string[]} BUILD_FORMATS - Module build formats */
const BUILD_FORMATS: BuildPkgFormat[] = ['cjs', 'esm', 'types']

/** @property {BuildPkgArgs} args - CLI arguments parser */
const args = bargs
  .option('bundle', {
    alias: 'b',
    default: true,
    describe: 'bundle build output with @vercel/ncc',
    type: 'boolean'
  })
  .option('formats', {
    alias: 'f',
    choices: BUILD_FORMATS,
    default: BUILD_FORMATS,
    describe: 'specify module build format(s)',
    type: 'array'
  })
  .alias('version', 'v')
  .pkgConf('build-pkg') as BuildPkgArgs

/**
 * Executes the package build workflow.
 *
 * @async
 * @return {Promise<void>} Empty promise when complete
 */
async function buildPackage(): Promise<void> {
  await build<BuildPkgOptions>(args.argv, async (argv, context) => {
    const { bundle, dryRun, env, formats = [] } = argv
    const { cwd, pwd } = context

    // Build project, convert output extensions, create bundles
    for (const format of formats) {
      // Remove stale build directory
      !dryRun && rimraf.sync(format)
      logger(argv, `remove stale ${format} directory`)

      // Check if types output is being built
      const TYPES = format === 'types'

      // Get config file suffix
      const suffix: `${string}.json` = `prod.${format}.json`

      // Get output extension
      const ext: 'cjs' | 'mjs' = `${format === 'cjs' ? 'c' : 'm'}js`

      // Get module format build options
      // See: https://github.com/jeremyben/tsc-prog
      // See: https://github.com/flex-development/trext
      const options: BuildModuleFormatOptions = (() => {
        const tsconfig = (() => {
          const { include = [] } = tsconfigCascade([[cwd, 'prod.json']])
          const { compilerOptions = {}, exclude = [] } = tsconfigCascade([
            [pwd, 'json'],
            [pwd, 'prod.json'],
            [cwd, 'prod.json'],
            [pwd, suffix]
          ])

          compilerOptions.outDir = format
          delete compilerOptions.rootDir

          return { compilerOptions, exclude, include }
        })()

        return {
          build: { ...tsconfig, basePath: cwd, clean: { outDir: true } },
          remap: {
            compilerOptions: { ...tsconfig.compilerOptions, baseUrl: '../..' },
            dryRun,
            verbose: !!JSON.parse(`${process.env.GITHUB_ACTIONS || 'false'}`)
          },
          trext: {
            absolute: /@flex-development/,
            babel: { sourceMaps: 'inline' as const },
            from: 'js',
            pattern: /.js$/,
            to: ext
          }
        } as BuildModuleFormatOptions
      })()

      // Build project
      if (!dryRun) {
        // Log compilation start
        logger(argv, 'compilation started')

        // Create TypeScript program
        const program = tsc.createProgramFromConfig(options.build)

        // Compile project
        const emit = program.emit(
          undefined,
          undefined,
          undefined,
          format === 'types'
        )

        // Get all diagnostics
        const diagnostics = [
          ...ts.getPreEmitDiagnostics(program),
          ...emit.diagnostics
        ]

        // Log diagnostics
        logDiagnostics(diagnostics, true)

        // Throw error if files weren't emitted
        if (!program.getCompilerOptions().noEmit && emit.emitSkipped) {
          throw new Error('compilation failed')
        }

        // Log compilation result
        if (diagnostics.length > 0) {
          const message = `compilation done with ${diagnostics.length} errors`
          logger(argv, message, [], LogLevel.WARN)
        } else logger(argv, 'compilation successful')
      }

      // Transform paths
      tsRemap(options.remap)

      // Bundle build output
      if (!TYPES && bundle) {
        // Create bundles
        // See: https://github.com/vercel/ncc
        const BUNDLES = [$WNS, `${$WNS}.min`].map(async name => {
          const bundle = `${format}/${name}.${options.trext.to}`
          const filename = 'src/index.ts'

          if (!dryRun) {
            const { code } = await ncc(`${cwd}/${filename}`, {
              esm: format === 'esm',
              externals: [
                ...Object.keys($PACKAGE?.optionalDependencies ?? {}),
                ...Object.keys($PACKAGE?.peerDependencies ?? {})
              ],
              filename,
              minify: path.extname(name) === '.min',
              production: env === 'production',
              quiet: true,
              target: options.build.compilerOptions?.target,
              // ! type check already performed above
              transpileOnly: true
            })

            await fs.writeFile(bundle, code, { flag: 'wx+' })
            await fs.copyFile(`${format}/index.d.ts`, `${format}/${name}.d.ts`)
            await replace.replaceInFile({
              files: bundle,
              from: ';// CONCATENATED MODULE: ./src/',
              to: ';// CONCATENATED MODULE: ../src/'
            })
          }

          return bundle
        })

        // Complete bundle promises
        logger(argv, `bundle ${format}`, await Promise.all(BUNDLES))
      }

      // Check if extensions should be converted
      const extensions = !TYPES && !dryRun

      // Convert TypeScript output to .cjs or .mjs
      extensions && (await trext<'js', typeof ext>(format, options.trext))
      !TYPES && logger(argv, `use .${ext} extensions`)
    }
  })
}

buildPackage()
