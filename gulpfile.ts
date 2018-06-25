import del = require('del');
import * as gulp from 'gulp';
import gulp_run = require('run-sequence');
import { build_watch } from './tasks/build-watch';
import { remap_watch } from './tasks/remap-watch';
import {
  glob_templates,
  output_relative_dirname,
} from './tasks/utils/constants';
import { create_transform } from './tasks/utils/create-transform';
import { generate_es_files } from './tasks/utils/generate-es-files';
import { generate_files } from './tasks/utils/generate-files';
import { generate_index } from './tasks/utils/generate-index';
import { generate_remap_content } from './tasks/utils/generate-remap-content';

gulp.task('clean', async () => del(`${output_relative_dirname}/`));
gulp.task('build-index', generate_index);
gulp.task('build-es-files', () => generate_es_files(glob_templates));
gulp.task('build-files', ['build-es-files'], () =>
  generate_files(glob_templates),
);

gulp.task('build', ['clean'], (callback: (error?: any) => void) =>
  gulp_run(['build-index', 'build-files'], callback),
);

gulp.task('build-watch', ['build'], build_watch);

gulp.task('clean-remap', async () => del('./snapshots/'));
gulp.task('remap', ['clean-remap'], () =>
  gulp
    .src('./tests/*.ts')
    .pipe(create_transform(generate_remap_content))
    .pipe(gulp.dest('./snapshots')),
);

gulp.task('remap-watch', ['remap'], remap_watch);
