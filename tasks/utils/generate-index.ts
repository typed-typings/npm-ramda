import * as gulp from 'gulp';
import gulp_rename = require('gulp-rename');
import {
  glob_index,
  output_extname,
  output_relative_dirname,
} from './constants';
import { create_transform } from './create-transform';
import { generate_index_content } from './generate-index-content';

export function generate_index() {
  return gulp
    .src(glob_index)
    .pipe(create_transform(generate_index_content))
    .pipe(gulp_rename({ basename: 'index', extname: output_extname }))
    .pipe(gulp.dest(output_relative_dirname));
}
