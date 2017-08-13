import * as del from 'del';
import * as fs from 'fs';
import * as gulp from 'gulp';
import * as gulp_util from 'gulp-util';
import * as path from 'path';
import { generate_remap_content } from './utils/generate-remap-content';

export const remap_watch = (_callback: (error?: any) => void) => {
  gulp.watch('./tests/__snapshots__/*.ts.snap', event => {
    const input_relative_filename = path.relative(process.cwd(), event.path);
    gulp_util.log(
      `Detected '${gulp_util.colors.cyan(
        input_relative_filename,
      )}' ${event.type}`,
    );

    const output_relative_filename = input_relative_filename
      .replace('tests/__snapshots__/', 'snapshots/')
      .replace(/\.snap$/, '');

    switch (event.type) {
      case 'added':
      case 'changed':
      case 'renamed':
        const remapped_snapshot = generate_remap_content(
          input_relative_filename,
        );
        fs.writeFile(
          output_relative_filename,
          remapped_snapshot,
          'utf8',
          (error: any) => {
            if (!error) {
              gulp_util.log(
                `Remapping '${gulp_util.colors.cyan(
                  output_relative_filename,
                )}' complete`,
              );
            } else {
              gulp_util.log(
                `Remapping '${gulp_util.colors.cyan(
                  output_relative_filename,
                )}' failed: ${error}`,
              );
            }
            gulp_util.log('Watching for file changes.');
          },
        );
        break;
      case 'deleted':
        del(input_relative_filename)
          .then(() => {
            gulp_util.log(
              `Deleting '${gulp_util.colors.cyan(
                output_relative_filename,
              )}' complete`,
            );
            gulp_util.log('Watching for file changes.');
          })
          .catch(error => {
            gulp_util.log(
              `Deleting '${gulp_util.colors.cyan(
                output_relative_filename,
              )}' failed: ${error}`,
            );
            gulp_util.log('Watching for file changes.');
          });
        break;
      default:
        throw new Error(`Unexpected event type '${event.type}'`);
    }
  });
};
