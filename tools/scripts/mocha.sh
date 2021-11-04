#!/bin/bash

# Testing Workflow
#
# References:
#
# - https://github.com/piotrwitek/ts-mocha
# - https://mochajs.org/#command-line-usage

# 1. Load default environment variables
. $GITHUB_WORKSPACE/.env

# 2. Set test environment variables
export NODE_ENV=test
export TS_NODE_PROJECT="$GITHUB_WORKSPACE/tsconfig.test.json"

# 3. Run test suites
ts-mocha $@
