import { get_options } from './get-options';

export const namespace_ramda = 'R';

export const input_relative_dirname = 'templates';
export const glob_index = `${input_relative_dirname}/README.md`;
export const glob_templates = `${input_relative_dirname}/*.ts`;

const { selectable, placeholder, output_dirname_postfix } = get_options();
export { selectable, placeholder };

export const output_sub_dirname = 'src';
export const output_relative_dirname = `./ramda/dist${output_dirname_postfix}`;
export const output_relative_sub_dirname = `${output_relative_dirname}/${
  output_sub_dirname
}`;
export const output_extname = '.d.ts';
