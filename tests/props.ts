import { Placeholder } from '../ramda/dist/src/$placeholder';
import R_props = require('../ramda/dist/src/props');

declare const placeholder: Placeholder;
declare const a_b_c_number_record: Record<'a' | 'b' | 'c', number>;

// @dts-jest:pass:snap
R_props(['a', 'b']);
// @dts-jest:pass:snap
R_props(['a', 'b'])(a_b_c_number_record);

// @dts-jest:pass:snap
R_props(['a', 'b'], a_b_c_number_record);

// @dts-jest:pass:snap
R_props(placeholder, a_b_c_number_record);
// @dts-jest:pass:snap
R_props(placeholder, a_b_c_number_record)(['a', 'b']);
