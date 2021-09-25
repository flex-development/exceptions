#!/usr/bin/env node

import logger from '@flex-development/grease/utils/logger.util'
import { LogLevel } from '@flex-development/log/enums/log-level.enum'
import Exception from '@packages/exceptions/exceptions/base.exception'
import { copyFileSync, existsSync } from 'fs-extra'
import path from 'path'
import type { PackageJson } from 'read-pkg'
import sh from 'shelljs'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'
import exec from '../helpers/exec'
import fixNodeModulePaths from '../helpers/fix-node-module-paths'
import pkg, { $name } from '../helpers/pkg-get'
import prepackDisable from '../scripts/prepack-disable'
import prepackEnable from '../scripts/prepack-enable'

/**
 * @file CLI - Package Build Workflow
 * @module tools/cli/build-pkg
 */

export type BuildOptions = {
  /**
   * Name of build environment.
   *
   * @default 'production'
   */
  env?: 'development' | 'production' | 'test'

  /** @see BuildOptions.env */
  e?: BuildOptions['env']

  /**
   * See the commands that running `build-pkg` would run.
   *
   * @default false
   */
  dryRun?: boolean

  /** @see BuildOptions.dryRun */
  d?: BuildOptions['dryRun']

  /**
   * Specify module build formats.
   *
   * @default ['cjs','esm5','esm2015','types']
   */
  formats?: ('cjs' | 'esm5' | 'esm2015' | 'types')[]

  /** @see BuildOptions.formats */
  f?: BuildOptions['formats']

  /**
   * Run preliminary `yarn install` if package contains build scripts.
   *
   * @default false
   */
  packInstall?: boolean

  /** @see BuildOptions.packInstall */
  i?: BuildOptions['packInstall']

  /**
   * Create tarball at specified path.
   *
   * @default '%s-%v.tgz'
   */
  out?: string

  /** @see BuildOptions.out */
  o?: BuildOptions['out']

  /**
   * Run `prepack` script.
   *
   * @default false
   */
  prepack?: boolean

  /** @see BuildOptions.prepack */
  p?: BuildOptions['prepack']

  /**
   * Pack the project once build is complete.
   *
   * @default false
   */
  tarball?: boolean

  /** @see BuildOptions.tarball */
  t?: BuildOptions['tarball']
}

/**
 * @property {string[]} BUILD_FORMATS - Module build formats
 */
const BUILD_FORMATS: BuildOptions['formats'] = [
  'cjs',
  'esm5',
  'esm2015',
  'types'
]

/**
 * @property {string[]} ENV_CHOICES - Build environment options
 */
const ENV_CHOICES: BuildOptions['env'][] = ['production', 'test', 'development']

/**
 * @property {string} COMMAND_PACK - Base pack command
 */
const COMMAND_PACK: string = 'yarn pack'

/**
 * @property {PackageJson} PACKAGE - package.json data
 */
const PACKAGE: PackageJson = pkg()

/**
 * @property {string} ROLLUP_CONFIG - Rollup config file
 */
const ROLLUP_CONFIG: string = 'rollup.config.ts'

/**
 * @property {boolean} ROLLUP_CONFIG_CHECK - Rollup config file check
 */
const ROLLUP_CONFIG_CHECK = existsSync(path.join(process.cwd(), ROLLUP_CONFIG))

/**
 * @property {string} TSCONFIG_PROD - Base production config file
 */
const TSCONFIG_PROD: string = 'tsconfig.prod.json'

/**
 * @property {boolean} TSCONFIG_PROD_CHECK - Production config file check
 */
const TSCONFIG_PROD_CHECK = existsSync(path.join(process.cwd(), TSCONFIG_PROD))

/**
 * @property {yargs.Argv} args - Command line arguments parser
 * @see https://github.com/yargs/yargs
 */
const args = yargs(hideBin(process.argv))
  .usage('$0 [options]')
  .option('env', {
    alias: 'e',
    choices: ENV_CHOICES,
    default: 'production',
    describe: 'name of build environment',
    requiresArg: true,
    string: true,
    type: 'string'
  })
  .option('dry-run', {
    alias: 'd',
    boolean: true,
    default: false,
    describe: 'see the commands that running `build-pkg` would run',
    type: 'boolean'
  })
  .option('formats', {
    alias: 'f',
    array: true,
    choices: BUILD_FORMATS,
    default: BUILD_FORMATS,
    description: 'specify module build format(s)'
  })
  .option('out', {
    alias: 'o',
    default: '%s-%v.tgz',
    description: 'create tarball at specified path',
    requiresArg: true,
    string: true,
    type: 'string'
  })
  .option('pack-install', {
    alias: 'i',
    boolean: true,
    default: false,
    description: 'run `yarn install` if package contains build scripts'
  })
  .option('prepack', {
    alias: 'p',
    boolean: true,
    default: false,
    description: 'run `prepack` script'
  })
  .option('tarball', {
    alias: 't',
    boolean: true,
    default: false,
    description: 'pack the project once build is complete'
  })
  .alias('version', 'v')
  .alias('help', 'h')
  .pkgConf('build-pkg')
  .wrap(98)

/**
 * @property {BuildOptions} argv - Command line arguments
 */
const argv: BuildOptions = args.argv as BuildOptions

// Log workflow start
logger(
  argv,
  'starting build workflow',
  [$name, `[dry=${argv.dryRun}]`],
  LogLevel.INFO
)

// Check if package should be bundled
const ROLLUP = argv.formats?.some(f => ['cjs', 'esm5', 'esm2015'].includes(f))

try {
  // Set environment variables
  exec(`dotenv -c ${argv.env} -- true`, argv.dryRun)
  logger(argv, `set ${argv.env} environment variables`)

  // Copy base TypeScript config file if base does not exist
  if (!TSCONFIG_PROD_CHECK && !argv.dryRun) {
    copyFileSync(path.join('..', '..', TSCONFIG_PROD), TSCONFIG_PROD)
  }

  // Build project with ttypescript - https://github.com/cevek/ttypescript
  for (const format of argv.formats ?? []) {
    // Get tsconfig config file and path
    const tsconfig: string = `tsconfig.prod.${format}.json`
    const tsconfig_path: string = path.join(process.cwd(), tsconfig)

    // Remove stale directory
    exec(`rimraf ${format}`, argv.dryRun)
    logger(argv, `remove stale ${format} directory`)

    // Check if config file already exists
    const tsconfig_check = existsSync(tsconfig_path)

    // Copy config file if base does not exist
    if (!tsconfig_check && !argv.dryRun) {
      copyFileSync(path.join('..', '..', tsconfig), tsconfig)
    }

    // Run build command
    if (exec(`ttsc -p ${tsconfig}`, argv.dryRun) || argv.dryRun) {
      logger(argv, `build ${format}`)
    }

    // Remove config file
    if (!tsconfig_check) exec(`rimraf ${tsconfig}`, argv.dryRun)
  }

  // Remove base TypeScript config file
  if (!TSCONFIG_PROD_CHECK && !argv.dryRun) {
    exec(`rimraf ${TSCONFIG_PROD}`, argv.dryRun)
  }

  // Fix node module import paths
  fixNodeModulePaths()

  // Create bundles
  if (ROLLUP) {
    // Remove stale dist directory
    exec('rimraf dist', argv.dryRun)
    logger(argv, 'remove stale dist directory')

    // Copy Rollup config file if one not exist
    if (!ROLLUP_CONFIG_CHECK && !argv.dryRun) {
      copyFileSync(path.join('..', '..', ROLLUP_CONFIG), ROLLUP_CONFIG)
    }

    // Allow TypeScript config file
    const configPlugin = '--configPlugin @rollup/plugin-typescript'

    // Rollup command
    const command = `rollup --config ${ROLLUP_CONFIG} ${configPlugin}`

    // Execute rollup command
    const rollup = exec(command, argv.dryRun)

    // Bundle package
    if (exec(`rollup --config ${ROLLUP_CONFIG} ${configPlugin}`, argv.dryRun)) {
      if (rollup === command) logger(argv, 'create bundles')
      else {
        for (const results of rollup.split('ms\n')) {
          if (!results) continue

          let data = results.slice(1).replaceAll('created', '  created')
          data = data.split(' in ')[0].replaceAll('...', '')

          logger(argv, data)
        }
      }
    }

    // Remove Rollup config file
    if (!ROLLUP_CONFIG_CHECK && !argv.dryRun) {
      exec(`rimraf ${ROLLUP_CONFIG}`, argv.dryRun)
    }
  }

  // Pack project
  if (argv.tarball) {
    const { dryRun, out: outFile, packInstall, prepack } = argv

    // Pack command flags
    const dry = `${dryRun ? '--dry-run' : ''}`
    const out = `--out ${outFile}`
    const install = `${packInstall ? '--install-if-needed' : ''}`

    // Check if package has postinstall and prepack scripts
    const postinstall_script = typeof PACKAGE.scripts?.postinstall === 'string'
    const prepack_script = typeof PACKAGE.scripts?.prepack === 'string'

    // Check if prepack script should be disabled
    const disable_prepack = prepack_script && !prepack

    // Disable postinstall script
    postinstall_script && exec('pinst --disable', dryRun)
    postinstall_script && logger(argv, 'disable postinstall script')

    // Disable prepack script
    if (disable_prepack) prepackDisable(undefined, dryRun)

    // Execute pack command
    exec(`${COMMAND_PACK} ${out} ${install} ${dry}`.trim(), dryRun)
    logger(argv, 'create tarball')

    // Renable postinstall script
    postinstall_script && exec('pinst --enable', dryRun)
    postinstall_script && logger(argv, 'renable postinstall script')

    // Renable prepack script
    if (disable_prepack) prepackEnable('renable prepack script', dryRun)
  }
} catch (error) {
  // Remove stale TypeScript config files
  for (const f of ['', ...(argv.formats ?? [])]) {
    // Get tsconfig file
    const tsconfig = TSCONFIG_PROD.replace('.prod', `.prod${f ? `.${f}` : ''}`)

    // Remove tsconfig file
    if (f || (!TSCONFIG_PROD_CHECK && !f)) {
      exec(`rimraf stale ${tsconfig}`, argv.dryRun)
    }
  }

  // Remove stale Rollup config file
  if (!ROLLUP_CONFIG_CHECK) exec(`rimraf ${ROLLUP_CONFIG}`, argv.dryRun)

  const exception = error as Exception

  logger(argv, exception.message, [], LogLevel.ERROR)
  sh.exit(exception.data?.code ?? 1)
}

// Log workflow end
logger(argv, 'build workflow complete', [$name], LogLevel.INFO)
