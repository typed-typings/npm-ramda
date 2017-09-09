import * as gulp from 'gulp';
import gulp_rename = require('gulp-rename');
import { output_extname, output_relative_sub_dirname } from './constants';
import { create_transform } from './create-transform';
import { generate_file_content } from './generate-file-content';

export function generate_files(
  glob_files: string,
  on_error: (error: Error) => void = error => {
    throw error;
  },
  on_end: () => void = () => {
    /* do nothing */
  },
) {
  return gulp
    .src(glob_files)
    .pipe(create_transform(generate_file_content))
    .on('error', on_error)
    .on('end', on_end)
    .pipe(
      gulp_rename(the_path => {
        the_path.basename = the_path.basename!.replace(/\.[a-z]$/, '');
        the_path.extname = output_extname;
      }),
    )
    .pipe(gulp.dest(output_relative_sub_dirname));
}
