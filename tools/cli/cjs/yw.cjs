#!/usr/bin/env node

require('ts-node').register(require('../../../tsconfig.json'))
require('tsconfig-paths/register')

/**
 * @file CLI - yw
 * @module tools/cli/cjs/yw
 */

require('../yw.ts')
