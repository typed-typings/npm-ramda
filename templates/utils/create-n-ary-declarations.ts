import * as dts from 'dts-element';
import * as R from 'ramda';

interface Args {
  curry_level: number;
  curry_levels: number[];
  variables: string[];
  types: string[];
  return_type: string;
  generics: string[];
  parameters: string[];
}

export const create_n_ary_declarations = (
  min_curry_level: number,
  max_curry_level: number,
  generate_function: (args: Args) => string,
  generate_additional?: (args: Args) => string,
) => {
  const return_type = 'R';
  const types = R.repeat(0, max_curry_level).map((_, index) => `T${index + 1}`);
  const variables = R.repeat(0, max_curry_level).map(
    (_, index) => `v${index + 1}`,
  );
  const parameters = variables.map(
    (variable, index) => `${variable}: ${types[index]}`,
  );
  const curry_levels = [];
  const declarations = [];
  for (
    let curry_level = min_curry_level;
    curry_level <= max_curry_level;
    curry_level++
  ) {
    curry_levels.push(curry_level);
    declarations.push(
      generate_function({
        curry_level,
        curry_levels,
        return_type,
        types: types.slice(0, curry_level),
        variables: variables.slice(0, curry_level),
        parameters: parameters.slice(0, curry_level),
        generics: [...types.slice(0, curry_level), return_type],
      }),
    );
  }
  if (generate_additional !== undefined) {
    declarations.push(
      generate_additional({
        curry_level: -1,
        curry_levels,
        return_type,
        types,
        variables,
        parameters,
        generics: [...types, return_type],
      }),
    );
  }
  return dts.parse(declarations.join('\n')).members;
};
