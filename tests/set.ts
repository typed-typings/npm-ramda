import * as R from '../ramda/dist/index';

declare const menual_lens_number_object: R.ManualLens<number, object>;
declare const pseudo_lens_a: R.PseudoLens<'a'>;
declare const pseudo_lens_1: R.PseudoLens<1>;

declare const object: object;
declare const a_1_b_2_c_3: { a: 1; b: 2; c: 3 };
declare const number_array: number[];
declare const string_number_tuple: [string, number];
declare const number: number;

// @dts-jest:pass:snap
R.set(menual_lens_number_object, number);
// @dts-jest:pass:snap
R.set(menual_lens_number_object)(number)(object);
// @dts-jest:pass:snap
R.set(menual_lens_number_object, number, object);

// @dts-jest:pass:snap
R.set(pseudo_lens_a, number);
// @dts-jest:pass:snap
R.set(pseudo_lens_a)(number)(a_1_b_2_c_3);
// @dts-jest:pass:snap
R.set(pseudo_lens_a, number, a_1_b_2_c_3);

// @dts-jest:pass:snap
R.set(pseudo_lens_1, number);
// @dts-jest:pass:snap
R.set(pseudo_lens_1)(number)(string_number_tuple);
// @dts-jest:pass:snap
R.set(pseudo_lens_1, number, string_number_tuple);
// @dts-jest:pass:snap
R.set(pseudo_lens_1)(number)(number_array);
// @dts-jest:pass:snap
R.set(pseudo_lens_1, number, number_array);
