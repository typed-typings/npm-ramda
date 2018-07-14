import * as R from '../ramda/dist/index';

declare const nothing_to_string: () => string;
declare const nothing_to_boolean: () => boolean;
declare const string_number_to_boolean: (a: string, b: number) => boolean;
declare const string_to_boolean: R.Morphism<string, boolean>;
declare const string_to_number: R.Morphism<string, number>;
declare const string_boolean_to_number: (a: string, b: boolean) => number;

// @dts-jest:pass:snap -> (v1: string) => number
R.cond([
  [string_to_boolean, string_to_number],
  [string_to_boolean, string_to_number],
]);

// @dts-jest:pass:snap -> (v1: string, v2: number) => number
R.cond([
  [string_to_boolean, string_to_number],
  [string_number_to_boolean, string_to_number],
]);

// @dts-jest:fail:snap -> Argument of type '([(a: string, b: number) => boolean, Morphism<string, number>] | [Morphism<string, boolean>, (a: ...' is not assignable to parameter of type '[(v1: string, v2: number, v3: {}, v4: {}, v5: {}, v6: {}) => boolean, (v1: string, v2: number, v3...'.
R.cond([
  [string_to_boolean, string_boolean_to_number],
  [string_number_to_boolean, string_to_number],
]);

// @dts-jest:pass:snap -> string
R.cond([
  [nothing_to_boolean, nothing_to_string],
  [nothing_to_boolean, nothing_to_string],
])();
