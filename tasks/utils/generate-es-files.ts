import * as gulp from 'gulp';
import gulp_rename = require('gulp-rename');
import * as path from 'path';
import { output_extname, output_relative_es_sub_dirname } from './constants';
import { create_transform } from './create-transform';

export function generate_es_files(
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
    .pipe(
      create_transform(filename => {
        const basename = path.basename(filename).split('.')[0];
        return `import ${basename} = require("../src/${basename}");\nexport default ${basename};`;
      }),
    )
    .on('error', on_error)
    .on('end', on_end)
    .pipe(
      gulp_rename(the_path => {
        the_path.basename = the_path.basename!.replace(/\.[a-z]$/, '');
        the_path.extname = output_extname;
      }),
    )
    .pipe(gulp.dest(output_relative_es_sub_dirname));
}
