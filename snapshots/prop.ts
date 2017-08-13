import { Placeholder } from '../ramda/dist/src/$placeholder';
import * as R_prop from '../ramda/dist/src/prop';

declare const placeholder: Placeholder;
declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass -> <T extends Record<"a", any>>(object: T) => T["a"]
R_prop('a');
// @dts-jest:pass -> number
R_prop('a')(a_b_number_record);

// @dts-jest:pass -> number
R_prop('a', a_b_number_record);

// @dts-jest:pass -> <K extends "a" | "b">(key: K) => Record<"a" | "b", number>[K]
R_prop(placeholder, a_b_number_record);
// @dts-jest:pass -> number
R_prop(placeholder, a_b_number_record)('a');
