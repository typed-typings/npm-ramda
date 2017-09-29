import { Placeholder } from '../ramda/dist/src/$placeholder';
import R_pluck = require('../ramda/dist/src/pluck');

declare const placeholder: Placeholder;
declare const a_number_record: Record<'a', number>;
declare const string_array: string[];
declare const x_y_z_with_a_record: {
  x: { a: 1 };
  y: { a: true };
  z: { a: 'string' };
};

// @dts-jest:pass:snap -> <V, T extends Record<"a", V>>(list: T[] | ArrayLike<T>) => T["a"][]
R_pluck('a');
// @dts-jest:pass:snap -> number[]
R_pluck('a')([a_number_record, a_number_record]);

// @dts-jest:pass:snap -> number[]
R_pluck('a', [a_number_record, a_number_record]);

// @dts-jest:pass:snap -> <K extends "a">(key: K) => Record<"a", number>[K][]
R_pluck(placeholder, [a_number_record, a_number_record]);
// @dts-jest:pass:snap -> number[]
R_pluck(placeholder, [a_number_record, a_number_record])('a');

// @dts-jest:pass:snap -> Record<"x" | "y" | "z", true | "string" | 1>
R_pluck('a', x_y_z_with_a_record);

// @dts-jest:pass:snap -> string[]
R_pluck(0, [string_array]);
