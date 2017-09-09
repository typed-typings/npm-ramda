import del = require('del');
import * as fs from 'fs';
import * as gulp from 'gulp';
import * as gulp_util from 'gulp-util';
import * as path from 'path';
import { generate_remap_content } from './utils/generate-remap-content';

export const remap_watch = (_callback: (error?: any) => void) => {
  gulp.watch(['./tests/*.ts', './tests/__snapshots__/*.ts.snap'], event => {
    const input_relative_filename = path.relative(process.cwd(), event.path);

    log('Detected', input_relative_filename, event.type);

    const input_test_relative_filename = input_relative_filename
      .replace('/__snapshots__/', '/')
      .replace(/\.snap$/, '');

    const output_relative_filename = input_test_relative_filename.replace(
      'tests/',
      'snapshots/',
    );

    switch (event.type) {
      case 'added':
      case 'changed':
      case 'renamed':
        try {
          const remapped_snapshot = generate_remap_content(
            input_test_relative_filename,
          );
          try {
            const target_content = fs.readFileSync(
              output_relative_filename,
              'utf8',
            );
            if (target_content === remapped_snapshot) {
              log('Remapping', output_relative_filename, 'no change');
              return;
            }
            // tslint:disable-next-line:no-empty
          } catch (e) {}
          fs.writeFile(
            output_relative_filename,
            remapped_snapshot,
            'utf8',
            (error: any) => {
              if (!error) {
                log('Remapping', output_relative_filename, 'complete');
              } else {
                log('Remapping', output_relative_filename, `failed: ${error}`);
              }
            },
          );
        } catch (e) {
          log('Remapping', output_relative_filename, `failed: ${e.message}`);
        }
        break;
      case 'deleted':
        del(input_relative_filename)
          .then(() => {
            log('Deleting', output_relative_filename, 'complete');
          })
          .catch(error => {
            log('Deleting', output_relative_filename, `failed: ${error}`);
          });
        break;
      default:
        throw new Error(`Unexpected event type '${event.type}'`);
    }
  });
};

function log(title: string, filename: string, content: string) {
  gulp_util.log(`${title} '${gulp_util.colors.cyan(filename)}' ${content}`);
  gulp_util.log('Watching for file changes.');
}
