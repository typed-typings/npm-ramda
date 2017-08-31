import * as dts_jest from 'dts-jest';
import * as fs from 'fs';
import * as path from 'path';

export function generate_remap_content(source_filename: string) {
  return dts_jest.remap(
    fs.readFileSync(source_filename, 'utf8'),
    fs.readFileSync(
      path.resolve(
        path.dirname(source_filename),
        `./__snapshots__/${path.basename(source_filename)}.snap`,
      ),
      'utf8',
    ),
    { source_filename },
  );
}
