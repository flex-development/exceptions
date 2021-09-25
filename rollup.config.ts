import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import read from 'read-pkg'
import type { OutputOptions, RollupOptions } from 'rollup'
import { terser } from 'rollup-plugin-terser'

/**
 * @file Rollup Configuration
 * @module https://rollupjs.org/guide/en/#configuration-files
 */

const PACKAGE = read.sync({ cwd: process.env.INIT_CWD })
const WORKSPACE_NO_SCOPE = PACKAGE.name.split('/')[1]

const EXTERNAL = Object.keys(PACKAGE.dependencies || {})
const TERSER = terser({ format: { comments: false } })

const tersed = (filename: string = '') => filename.replace('.js', '.min.js')

const config: RollupOptions[] = [
  {
    input: 'esm5/index.js',
    output: {
      file: PACKAGE.main,
      format: 'umd'
    },
    plugins: [commonjs()]
  },
  {
    input: 'esm5/index.js',
    external: EXTERNAL,
    output: {
      file: PACKAGE.module,
      format: 'es'
    }
  },
  {
    input: 'esm2015/index.js',
    external: EXTERNAL,
    output: {
      file: PACKAGE.es2015,
      format: 'es'
    }
  }
].map(options => {
  const o = options.output as OutputOptions

  return {
    ...options,
    context: 'this',
    output: [o, { ...o, file: tersed(o.file), plugins: [TERSER] }].map(oo => ({
      ...oo,
      name: oo.format === 'umd' ? WORKSPACE_NO_SCOPE : undefined,
      sourcemap: true
    })),
    plugins: [nodeResolve(), ...(options.plugins ?? [])]
  }
})

export default config
