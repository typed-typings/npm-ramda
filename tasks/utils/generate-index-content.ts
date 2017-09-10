import * as dts from 'dts-element';
import glob = require('glob');
import * as path from 'path';
import {
  glob_templates,
  input_relative_dirname,
  namespace_ramda,
  output_sub_dirname,
} from './constants';

export function generate_index_content() {
  const filenames = glob
    .sync(glob_templates)
    .map(
      filename =>
        `./${output_sub_dirname}/${path
          .relative(input_relative_dirname, filename)
          .replace(/(\.[a-z])?\.ts$/, '')}`,
    );

  const jsdoc_binded_filenames: string[] = [];
  const non_jsdoc_binded_filenames: string[] = [];

  filenames.forEach(filename => {
    if (path.basename(filename).startsWith('$')) {
      non_jsdoc_binded_filenames.push(filename);
    } else {
      jsdoc_binded_filenames.push(filename);
    }
  });

  return dts.emit([
    dts.create_export_namespace({ name: namespace_ramda }),
    ...non_jsdoc_binded_filenames.map(filename =>
      dts.create_export_named({ from: filename }),
    ),
    ...jsdoc_binded_filenames.map(filename =>
      dts.create_import_equal({
        name: path.basename(filename),
        from: filename,
      }),
    ),
    dts.create_export_named({
      members: jsdoc_binded_filenames.map(filename =>
        dts.create_export_member({ name: path.basename(filename) }),
      ),
    }),
  ]);
}
