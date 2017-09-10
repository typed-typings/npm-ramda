import * as gulp_util from 'gulp-util';
import yargs = require('yargs');

export function get_options() {
  const options = {
    placeholder: false,
    selectable: false,
  };
  type Kind = keyof typeof options;
  const no_kind = 'simple';
  const all_kinds: Kind[] = ['placeholder', 'selectable'];

  const args = yargs
    .array('kind')
    .default('kind', all_kinds)
    .choices('kind', all_kinds)
    .parse(process.argv.slice(1));

  const kinds = (args.kind as Kind[]).slice().sort();
  kinds.forEach(kind => {
    options[kind] = true;
  });

  if (process.argv.some(x => x.startsWith('build'))) {
    gulp_util.log(
      `Features ${(kinds.length === 0 ? [no_kind] : kinds)
        .map(kind => `'${gulp_util.colors.cyan(kind)}'`)
        .join(', ')}`,
    );
  }

  const dirname_postfixes =
    kinds.length === 0
      ? [no_kind]
      : kinds.length === all_kinds.length ? [] : kinds;

  return {
    ...options,
    output_dirname_postfix: dirname_postfixes.map(x => `-${x}`).join(''),
  };
}
