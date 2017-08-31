import { Placeholder } from '../ramda/dist/src/$placeholder';
import R_propOr = require('../ramda/dist/src/propOr');

declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;
declare const defaults: 'defaults';

// @dts-jest:pass:snap -> <T extends Record<"a", any>>(object: T) => "defaults" | T["a"]
R_propOr(defaults, 'a');
// @dts-jest:pass:snap -> number | "defaults"
R_propOr(defaults, 'a')(a_b_number_record);

// @dts-jest:pass:snap -> number | "defaults"
R_propOr(defaults, 'a', a_b_number_record);

// @dts-jest:pass:snap -> <K extends "a" | "b">(key: K) => "defaults" | Record<"a" | "b", number>[K]
R_propOr(defaults, placeholder, a_b_number_record);
// @dts-jest:pass:snap -> number | "defaults"
R_propOr(defaults, placeholder, a_b_number_record)('a');
