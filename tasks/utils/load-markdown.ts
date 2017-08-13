import * as fs from 'fs';

export const load_markdown = (filename: string) =>
  fs.readFileSync(filename.replace(/(\.[a-z])?\.ts$/, '.md'), 'utf8').trim();
