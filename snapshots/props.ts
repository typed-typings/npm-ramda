import { Placeholder } from '../ramda/dist/src/$placeholder';
import * as R_props from '../ramda/dist/src/props';

declare const placeholder: Placeholder;
declare const a_b_c_number_record: Record<'a' | 'b' | 'c', number>;

// @dts-jest:pass -> <T extends Record<"a" | "b", any>>(object: T) => T["a" | "b"][]
R_props(['a', 'b']);
// @dts-jest:pass -> number[]
R_props(['a', 'b'])(a_b_c_number_record);

// @dts-jest:pass -> number[]
R_props(['a', 'b'], a_b_c_number_record);

// @dts-jest:pass -> <K extends "a" | "b" | "c">(keys: K[] | ArrayLike<K>) => Record<"a" | "b" | "c", number>[K][]
R_props(placeholder, a_b_c_number_record);
// @dts-jest:pass -> number[]
R_props(placeholder, a_b_c_number_record)(['a', 'b']);
