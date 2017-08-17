import * as fs from 'fs';
import * as gulp from 'gulp';
import * as gulp_prettier from 'gulp-plugin-prettier';
import * as gulp_util from 'gulp-util';
import * as prettier from 'prettier';
import * as tslint from 'tslint';
import {
  dt_dirname,
  dt_ramda_dirname,
  output_relative_dirname,
} from './utils/constants';

// tslint:disable-next-line:no-var-requires
const gulp_modify = require('gulp-modify');

const test_filename = 'ramda-tests.ts';

const definition_names: string[] = [];

// DT style (https://github.com/Microsoft/dtslint/blob/master/dt.json)
const prettier_options: prettier.Options = {
  bracketSpacing: true,
  printWidth: 120, // original 200, decreased due to trailing comments
  tabWidth: 4,
  trailingComma: 'all',
  parser: 'typescript',
};

export const build_dt_definitions = () =>
  gulp
    .src(`${output_relative_dirname}/**/*`, {
      base: output_relative_dirname,
    })
    .pipe(
      gulp_modify({
        fileModifier: (file: gulp_util.File, contents: string) => {
          definition_names.push(file.relative);
          if (file.path.endsWith('index.d.ts')) {
            const dt_header = fs
              .readFileSync(`${dt_dirname}/dt-header.txt`, 'utf8')
              .trim();
            return `${dt_header}\n\n${contents}`;
          }
          return contents;
        },
      }),
    )
    .pipe(
      gulp_prettier.format(prettier_options, {
        reporter: gulp_prettier.Reporter.None,
      }),
    )
    .pipe(gulp.dest(dt_ramda_dirname));

export const build_dt_chores = () =>
  gulp
    .src([`${dt_dirname}/tsconfig.json`, `${dt_dirname}/tslint.json`])
    .pipe(
      gulp_modify({
        fileModifier: (file: gulp_util.File, contents: string) => {
          if (file.path.endsWith('tsconfig.json')) {
            const tsconfig = JSON.parse(contents);
            tsconfig.files = [...definition_names, test_filename];
            return JSON.stringify(tsconfig, null, 4);
          }
          return contents;
        },
      }),
    )
    .pipe(gulp.dest(dt_ramda_dirname));

export const build_dt_tests = () => {
  const linter = new tslint.Linter({ fix: true });

  const snapshot_filename = `snapshots/${test_filename}`;
  const output_filename = `${dt_ramda_dirname}/${test_filename}`;

  linter.lint(
    output_filename,
    prettier.format(
      fs
        .readFileSync(snapshot_filename, 'utf8')
        .replace(`'../ramda/dist/index'`, `'ramda'`)
        .replace(/\/\/ @dts-jest:fail ->.+/g, '// $ExpectError')
        .replace(/\/\/ @dts-jest:pass ->/g, '// $ExpectType'),
      prettier_options,
    ),
    tslint.Linter.findConfiguration(null, output_filename).results,
  );
};
