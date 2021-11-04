import { lstatSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { workspaces as GLOBS } from '../../package.json'

/**
 * @file Helpers - workspaces
 * @module tools/helpers/workspaces
 */

/**
 * Returns an array containing Yarn workspace directory names.
 *
 * @return {string[]} Workspace directory names
 */
const workspaces = (): string[] => {
  return GLOBS.map(g => g.split('/')[0]).flatMap((proj?: string): string[] => {
    // Get path to Yarn project directory
    const dir = path.resolve(workspaces.ROOT, proj as string)

    // Add subdirectories under Yarn project directory
    return readdirSync(dir).filter(workspace => {
      if (!lstatSync(path.resolve(dir, workspace)).isDirectory()) return
      return workspace
    })
  })
}

workspaces.ROOT = process.env.GITHUB_WORKSPACE as string

export default workspaces
