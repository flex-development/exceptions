#!/bin/zsh

# Post Publish Workflow

# 1. Cross-publish package to NPM
# 2. Re-enable postinstall script
# 3. Checkout `next` branch
# 4. Rebase origin/main (with new, recently published code) onto `next`
# 5. Push updates
npm publish --ignore-scripts --@OWNER:registry='https://registry.npmjs.org'
pinst -e
git ch next
git rebase origin/main
git pnv
