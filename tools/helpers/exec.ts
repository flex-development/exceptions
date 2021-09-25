import logger from '@flex-development/grease/utils/logger.util'
import { LogLevel } from '@flex-development/log/enums/log-level.enum'
import { ExceptionStatusCode } from '@packages/exceptions/enums'
import Exception from '@packages/exceptions/exceptions/base.exception'
import type { ChildProcess } from 'child_process'
import sh from 'shelljs'

/**
 * @file Helpers - Shell Command Executor
 * @module tools/helpers/exec
 */

/**
 * Executes a shell command or logs the command that would be run.
 *
 * @param {string} command - Command
 * @param {boolean} [dryRun=false] - Log command that would be run
 * @param {sh.ExecOptions} [options={silent:true}] - `sh.exec` options
 * @return {string} Command output or command
 * @throws {Exception}
 */
const exec = (
  command: string,
  dryRun: boolean = false,
  options: sh.ExecOptions = {}
): string => {
  // Format command
  command = command.trim()

  // Set default options
  if (options.silent === undefined) options.silent = true

  // Command output
  let stdout: ChildProcess | sh.ShellString | null = null

  // Log command during dry runs, otherwise execute command
  if (dryRun) logger({}, command, [], LogLevel.WARN)
  else stdout = sh.exec(command, options) as sh.ShellString | null

  // Throw Exception if error executing command
  if (stdout && stdout.code !== 0) {
    throw new Exception(ExceptionStatusCode.INTERNAL_SERVER_ERROR, undefined, {
      code: stdout.code,
      message: (stdout.stderr || stdout.stdout).toString()
    })
  }

  // Rollup seems to pipe everything to stdout.stderr
  if (command.includes('rollup') && stdout?.stderr) {
    return new sh.ShellString(stdout.stderr).toString()
  }

  // Format command output
  if (stdout && stdout.length > 0) return stdout.toString().replaceAll('\n', '')

  return command
}

export default exec
