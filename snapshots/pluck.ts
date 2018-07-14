import * as R from '../ramda/dist/index';

declare const a_number_record: Record<'a', number>;
declare const string_array: string[];
declare const x_y_z_with_a_record: {
  x: { a: 1 };
  y: { a: true };
  z: { a: 'string' };
};

// @dts-jest:pass:snap -> <V, T extends Record<"a", V>>(list: R.List<T>) => T["a"][]
R.pluck('a');
// @dts-jest:pass:snap -> number[]
R.pluck('a')([a_number_record, a_number_record]);

// @dts-jest:pass:snap -> number[]
R.pluck('a', [a_number_record, a_number_record]);

// @dts-jest:pass:snap -> <K extends "a">(key: K) => Record<"a", number>[K][]
R.pluck(R.__, [a_number_record, a_number_record]);
// @dts-jest:pass:snap -> number[]
R.pluck(R.__, [a_number_record, a_number_record])('a');

// @dts-jest:pass:snap -> { x: 1; y: true; z: "string"; }
R.pluck('a', x_y_z_with_a_record);

// @dts-jest:pass:snap -> string[]
R.pluck(0, [string_array]);
