import * as child_process from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const args = process.argv.slice(2);

if (args.length < 2) {
  throw new Error(
    `Usage: ts-node path/to/migrate-jsdoc.ts <ramda-tag> <output-dir>`,
  );
}

const ramda_tag = args[0];
const output_dir = path.resolve(process.cwd(), args[1]);

if (!fs.existsSync(output_dir)) {
  child_process.execSync(`mkdir -p ${output_dir}`);
} else if (!fs.statSync(output_dir).isDirectory()) {
  throw new Error(`output-dir should be a directory: ${output_dir}`);
}

const temp_dir = `${__dirname}/temp`;
child_process.execSync(
  `git clone https://github.com/ramda/ramda.git ${temp_dir} --branch ${ramda_tag} --depth=1`,
);

const src_dir = `${temp_dir}/src`;
const src_filenames = fs
  .readdirSync(src_dir)
  .filter(filename => filename.endsWith('.js'));

src_filenames.forEach(filename => {
  const content = fs.readFileSync(`${src_dir}/${filename}`, 'utf8');
  const jsdoc = content.match(/\/\*\*([\s\S]+?)\*\//)![1]
    .replace(/^ \* ?/gm, '')
    .trim();

  const basename = path.basename(filename, '.js');
  const output_filename = `${output_dir}/${basename}.md`;
  fs.writeFileSync(output_filename, `${jsdoc}\n`, { encoding: 'utf8' });
});

child_process.execSync(`rm -rf ${temp_dir}`);
