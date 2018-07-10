import * as R from '../ramda/dist/index';

declare const a_b_c_number_record: Record<'a' | 'b' | 'c', number>;

// @dts-jest:pass:snap -> <T extends Record<"a" | "b", any>>(object: T) => T["a" | "b"][]
R.props(['a', 'b']);
// @dts-jest:pass:snap -> number[]
R.props(['a', 'b'])(a_b_c_number_record);

// @dts-jest:pass:snap -> number[]
R.props(['a', 'b'], a_b_c_number_record);

// @dts-jest:pass:snap -> <K extends "a" | "b" | "c">(keys: K[] | ArrayLike<K>) => Record<"a" | "b" | "c", number>[K][]
R.props(R.__, a_b_c_number_record);
// @dts-jest:pass:snap -> number[]
R.props(R.__, a_b_c_number_record)(['a', 'b']);
