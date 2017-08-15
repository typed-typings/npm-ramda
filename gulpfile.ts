import * as del from 'del';
import * as gulp from 'gulp';
import * as gulp_diff from 'gulp-diff';
import * as gulp_rename from 'gulp-rename';
import * as gulp_run from 'run-sequence';
import {
  build_dt_chores,
  build_dt_definitions,
  build_dt_tests,
} from './tasks/build-dt';
import { build_watch } from './tasks/build-watch';
import { remap_watch } from './tasks/remap-watch';
import {
  dt_ramda_dirname,
  glob_templates,
  output_relative_dirname,
} from './tasks/utils/constants';
import { create_transform } from './tasks/utils/create-transform';
import { generate_files } from './tasks/utils/generate-files';
import { generate_index } from './tasks/utils/generate-index';
import { generate_remap_content } from './tasks/utils/generate-remap-content';

type RunCallback = (error?: any) => void;

gulp.task('clean', async () => del(`${output_relative_dirname}/`));
gulp.task('build-index', generate_index);
gulp.task('build-files', () => generate_files(glob_templates));

gulp.task('build', ['clean'], (callback: RunCallback) =>
  gulp_run(['build-index', 'build-files'], callback),
);

gulp.task('build-watch', ['build'], build_watch);

gulp.task('clean-remap', async () => del('./snapshots/'));
gulp.task('remap', ['clean-remap'], () =>
  gulp
    .src('./tests/__snapshots__/*.ts.snap')
    .pipe(create_transform(generate_remap_content))
    .pipe(gulp_rename({ extname: '' }))
    .pipe(gulp.dest('./snapshots')),
);
gulp.task('remap-check', () => {
  function on_error() {
    throw new Error('Detected outdated remapped-snapshots');
  }
  return gulp
    .src('./tests/__snapshots__/*.ts.snap')
    .pipe(create_transform(generate_remap_content))
    .pipe(gulp_rename({ extname: '' }))
    .pipe(gulp_diff('./snapshots'))
    .on('error', on_error)
    .pipe(gulp_diff.reporter({ fail: true }))
    .on('error', on_error);
});

gulp.task('remap-watch', ['remap'], remap_watch);

gulp.task('clean-dt', async () => del(dt_ramda_dirname));

gulp.task('build-dt-definitions', build_dt_definitions);
gulp.task('build-dt-chores', build_dt_chores);
gulp.task('build-dt-tests', build_dt_tests);

gulp.task('build-dt', ['clean-dt', 'build'], (callback: RunCallback) =>
  gulp_run(
    'build-dt-definitions',
    'build-dt-chores',
    'build-dt-tests',
    callback,
  ),
);
