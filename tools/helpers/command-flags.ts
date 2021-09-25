/**
 * @file Helpers - Command Flags
 * @module tools/helpers/commandFlags
 */

/**
 * Returns a string representing a list of command flags given a [`yargs`][1]
 * argument object and array of forbidden `keys`.
 *
 * [1]: https://github.com/yargs/yargs
 *
 * @template T - Arguments object type
 *
 * @param {T} argv - Arguments object
 * @param {string[]} [keys=[]] - Non-flag argument keys
 * @return {string} Command flags
 */
function commandFlags<T extends Record<string, any>>(
  argv: T,
  keys: string[] = []
): string {
  return Object.keys(argv)
    .map(key => {
      if (keys.includes(key)) return ''

      const value = argv[key]
      const prefix = key.length === 1 ? '-' : '--'

      return value === true ? `${prefix}${key}` : `${prefix}${key}=${value}`
    })
    .filter(flag => flag.length > 0)
    .join(' ')
}

export default commandFlags
