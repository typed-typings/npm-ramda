#!/bin/bash
for test in $(find tests -name '*.ts'); do
  # if [[ $(uname) == MS* ]]; then # Windows (PowerShell)
    # node ./node_modules/typings-checker/dist/index.js $test --verbose --noLines 2>&1 | Out-File -encoding utf8 tee $test.out
  if [[ $PWD == /mnt/* ]]; then # Bash on Windows, messes with local path so try global install
    ./node_modules/typings-checker/dist/index.js --allow-expect-error --project tests/tsconfig.json $test 2>&1 | perl -pe 's/\.ts:(\d+)/.ts/' | tee $test.out
  else
    node ./node_modules/typings-checker/dist/index.js --allow-expect-error --project tests/tsconfig.json $test 2>&1 | perl -pe 's/\.ts:(\d+)/.ts/' | tee $test.out
  fi
  rc=${PIPESTATUS[0]}; if [[ $rc != 0 ]]; then exit $rc; fi
done

# This shows changes and sets the exit code.
set -o errexit
git status
git --no-pager diff -- tests
