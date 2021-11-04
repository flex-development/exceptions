#!/bin/bash

# Testing Workflow
#
# References:
#
# - https://github.com/piotrwitek/ts-mocha
# - https://mochajs.org/#command-line-usage

# 1. Load default environment variables
. $PROJECT_CWD/.env

# 2. Set test environment variables
export NODE_ENV=test
export TS_NODE_PROJECT="$PROJECT_CWD/tsconfig.test.json"

# 3. Run test suites
ts-mocha $@
