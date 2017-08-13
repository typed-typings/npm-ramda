import * as gulp from 'gulp';
import * as gulp_util from 'gulp-util';
import * as path from 'path';
import {
  glob_templates,
  input_relative_dirname,
  output_relative_sub_dirname,
} from './utils/constants';
import { generate_files } from './utils/generate-files';
import { generate_index } from './utils/generate-index';

export const build_watch = (_callback: (error?: any) => void) => {
  gulp.watch(glob_templates, event => {
    const input_relative_filename = path.relative(process.cwd(), event.path);
    gulp_util.log(
      `Detected '${gulp_util.colors.cyan(
        input_relative_filename,
      )}' ${event.type}`,
    );

    const output_relative_filename = input_relative_filename
      .replace(input_relative_dirname, output_relative_sub_dirname)
      .replace(/(\.[a-z])?\.ts$/, '.d.ts');

    switch (event.type) {
      case 'changed':
        generate_files(input_relative_filename, on_error, on_end);
        break;
      case 'added':
      case 'deleted':
      case 'renamed':
        generate_index();
        generate_files(input_relative_filename, on_error, on_end);
        break;
      default:
        throw new Error(`Unexpected event type '${event.type}'`);
    }

    let error: Error | undefined;
    function on_error(this: NodeJS.ReadWriteStream, e: Error) {
      error = e;
      // tslint:disable-next-line:no-invalid-this
      this.end();
    }
    function on_end() {
      if (error !== undefined) {
        gulp_util.log(
          `Building '${gulp_util.colors.cyan(
            output_relative_filename,
          )}' failed\n\n${error.stack}`,
        );
      } else {
        gulp_util.log(
          `Building '${gulp_util.colors.cyan(
            output_relative_filename,
          )}' complete`,
        );
      }
      gulp_util.log('Watching for file changes.');
    }
  });
};
