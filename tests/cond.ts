import * as R from '../ramda/dist/index';

declare const nothing_to_string: () => string;
declare const nothing_to_boolean: () => boolean;
declare const string_number_to_boolean: (a: string, b: number) => boolean;
declare const string_to_boolean: R.Morphism<string, boolean>;
declare const string_to_number: R.Morphism<string, number>;
declare const string_boolean_to_number: (a: string, b: boolean) => number;

// @dts-jest:pass:snap
R.cond([
  [string_to_boolean, string_to_number],
  [string_to_boolean, string_to_number],
]);

// @dts-jest:pass:snap
R.cond([
  [string_to_boolean, string_to_number],
  [string_number_to_boolean, string_to_number],
]);

// @dts-jest:fail:snap
R.cond([
  [string_to_boolean, string_boolean_to_number],
  [string_number_to_boolean, string_to_number],
]);

// @dts-jest:pass:snap
R.cond([
  [nothing_to_boolean, nothing_to_string],
  [nothing_to_boolean, nothing_to_string],
])();
