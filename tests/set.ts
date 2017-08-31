import { ManualLens, PseudoLens } from '../ramda/dist/src/$types';
import R_set = require('../ramda/dist/src/set');

declare const menual_lens_number_object: ManualLens<number, object>;
declare const pseudo_lens_a: PseudoLens<'a'>;
declare const pseudo_lens_1: PseudoLens<1>;

declare const object: object;
declare const a_1_b_2_c_3: { a: 1; b: 2; c: 3 };
declare const number_array: number[];
declare const string_number_tuple: [string, number];
declare const number: number;

// @dts-jest:pass:snap
R_set(menual_lens_number_object, number);
// @dts-jest:pass:snap
R_set(menual_lens_number_object)(number)(object);
// @dts-jest:pass:snap
R_set(menual_lens_number_object, number, object);

// @dts-jest:pass:snap
R_set(pseudo_lens_a, number);
// @dts-jest:pass:snap
R_set(pseudo_lens_a)(number)(a_1_b_2_c_3);
// @dts-jest:pass:snap
R_set(pseudo_lens_a, number, a_1_b_2_c_3);

// @dts-jest:pass:snap
R_set(pseudo_lens_1, number);
// @dts-jest:pass:snap
R_set(pseudo_lens_1)(number)(string_number_tuple);
// @dts-jest:pass:snap
R_set(pseudo_lens_1, number, string_number_tuple);
// @dts-jest:pass:snap
R_set(pseudo_lens_1)(number)(number_array);
// @dts-jest:pass:snap
R_set(pseudo_lens_1, number, number_array);
