import { ManualLens, PseudoLens } from '../ramda/dist/src/$types';
import R_view = require('../ramda/dist/src/view');

declare const menual_lens_number_object: ManualLens<number, object>;
declare const pseudo_lens_a: PseudoLens<'a'>;
declare const pseudo_lens_1: PseudoLens<1>;

declare const object: object;
declare const a_1_b_2_c_3: { a: 1; b: 2; c: 3 };
declare const number_array: number[];
declare const string_number_tuple: [string, number];

// @dts-jest:pass:snap
R_view(menual_lens_number_object);
// @dts-jest:pass:snap
R_view(menual_lens_number_object)(object);
// @dts-jest:pass:snap
R_view(menual_lens_number_object, object);

// @dts-jest:pass:snap
R_view(pseudo_lens_a);
// @dts-jest:pass:snap
R_view(pseudo_lens_a)(a_1_b_2_c_3);
// @dts-jest:pass:snap
R_view(pseudo_lens_a, a_1_b_2_c_3);

// @dts-jest:pass:snap
R_view(pseudo_lens_1);
// @dts-jest:pass:snap
R_view(pseudo_lens_1)(string_number_tuple);
// @dts-jest:pass:snap
R_view(pseudo_lens_1, string_number_tuple);
// @dts-jest:pass:snap
R_view(pseudo_lens_1)(number_array);
// @dts-jest:pass:snap
R_view(pseudo_lens_1, number_array);
