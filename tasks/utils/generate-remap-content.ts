import * as dts_jest from 'dts-jest';
import * as fs from 'fs';
import * as path from 'path';

export function generate_remap_content(filename: string) {
  const cache_filename = path.resolve(
    process.cwd(),
    filename.replace(/\.ts\.snap$/, '.js'),
  );
  delete require.cache[cache_filename];
  return dts_jest.remap_snapshot(
    fs.readFileSync(filename, 'utf8'),
    fs.readFileSync(
      path.resolve(
        path.dirname(filename),
        `../${path.basename(filename, '.snap')}`,
      ),
      'utf8',
    ),
    cache_filename,
  );
}
