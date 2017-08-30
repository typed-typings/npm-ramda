import { Morphism } from '../ramda/dist/src/$types';
import * as R_cond from '../ramda/dist/src/cond';

declare const string_number_to_boolean: (a: string, b: number) => boolean;
declare const string_to_boolean: Morphism<string, boolean>;
declare const string_to_number: Morphism<string, number>;
declare const string_boolean_to_number: (a: string, b: boolean) => number;

// @dts-jest:pass:snap
R_cond([
  [string_to_boolean, string_to_number],
  [string_to_boolean, string_to_number],
]);

// @dts-jest:pass:snap
R_cond([
  [string_to_boolean, string_to_number],
  [string_number_to_boolean, string_to_number],
]);

// @dts-jest:fail:snap
R_cond([
  [string_to_boolean, string_boolean_to_number],
  [string_number_to_boolean, string_to_number],
]);
