#!/bin/bash

yarn run build-dt

cd ./DefinitelyTyped

yarn
yarn run lint

cd ..
