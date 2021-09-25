#!/usr/bin/env node

import type { Argv } from 'yargs'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'
import flags from '../helpers/command-flags'
import exec from '../helpers/exec'

/**
 * @file CLI - yw
 * @module tools/cli/yw
 * @see https://yarnpkg.com/cli/workspace
 */

type ParsedOptions = {
  '[args]'?: string[]
  '[cmd]'?: string
  'workspace-no-scope'?: string
}

/**
 * @property {Argv<ParsedOptions>} args - Command line arguments parser
 * @see https://github.com/yargs/yargs
 */
const args: Argv<ParsedOptions> = yargs(hideBin(process.argv))
  .usage('$0 [options]')
  .command(
    'yw [workspace-no-scope] [cmd] [args]',
    'run command within specified workspace',
    yargs => {
      return yargs
        .positional('workspace-no-scope', {
          describe: 'workspace (no scope)',
          string: true,
          type: 'string'
        })
        .positional('[cmd]', {
          describe: 'yarn workspace command',
          require: true,
          requiresArg: true,
          type: 'string'
        })
        .positional('[args]', {
          array: true,
          describe: 'yarn workspace command arguments',
          require: false,
          requiresArg: true,
          type: 'string'
        })
    }
  )
  .alias('help', 'h')
  .pkgConf('yw')
  .wrap(98)

// Get full command as arguments array
const ARGUMENTS = [
  'yarn workspace',
  `@flex-development/${args.argv['workspace-no-scope'] || args.argv._[0]}`,
  args.argv.cmd || args.argv._[1] || '',
  args.argv.args || args.argv._[2] || '',
  flags(args.argv, [
    '_',
    '$0',
    'args',
    'cmd',
    'workspace-no-scope',
    'workspaceNoScope'
  ])
].filter(Boolean)

// Execute `yarn workspace` command
exec(ARGUMENTS.join(' '), false, { silent: false })
