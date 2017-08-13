#!/bin/bash

git fetch --all

git tag "v$npm_package_version-dist" origin/dist
git tag "v$npm_package_version-dist-simple" origin/dist-simple
git tag "v$npm_package_version-dist-selectable" origin/dist-selectable
git tag "v$npm_package_version-dist-placeholder" origin/dist-placeholder

git push --tags
