#!/bin/bash

cd ./DefinitelyTyped
yarn install --force
cd ..

yarn run build-dt

cd ./DefinitelyTyped
yarn run lint || eval "DT_LINT_STATE=error"
cd ..

if [ "$DT_LINT_STATE" = "error" ]; then
  exit 1;
fi
