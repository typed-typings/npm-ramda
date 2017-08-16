#!/bin/bash

yarn run build-dt

cd ./DefinitelyTyped

yarn
yarn run lint || eval "DT_LINT_STATE=error"

cd ..

if [ "$DT_LINT_STATE" = "error" ]; then
  exit 1;
fi
