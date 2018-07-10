import * as R from '../ramda/dist/index';

declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass:snap -> <T extends Record<"a", any>>(object: T) => T["a"]
R.prop('a');
// @dts-jest:pass:snap -> number
R.prop('a')(a_b_number_record);

// @dts-jest:pass:snap -> number
R.prop('a', a_b_number_record);

// @dts-jest:pass:snap -> <K extends "a" | "b">(key: K) => Record<"a" | "b", number>[K]
R.prop(R.__, a_b_number_record);
// @dts-jest:pass:snap -> number
R.prop(R.__, a_b_number_record)('a');
