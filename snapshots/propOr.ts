import * as R from '../ramda/dist/index';

declare const a_b_number_record: Record<'a' | 'b', number>;
declare const defaults: 'defaults';

// @dts-jest:pass:snap -> <T extends Record<"a", any>>(object: T) => "defaults" | T["a"]
R.propOr(defaults, 'a');
// @dts-jest:pass:snap -> number | "defaults"
R.propOr(defaults, 'a')(a_b_number_record);

// @dts-jest:pass:snap -> number | "defaults"
R.propOr(defaults, 'a', a_b_number_record);
// @dts-jest:pass:snap -> {} | "defaults"
R.propOr(defaults, 'a', undefined);

// @dts-jest:pass:snap -> <K extends "a" | "b">(key: K) => "defaults" | Record<"a" | "b", number>[K]
R.propOr(defaults, R.__, a_b_number_record);
// @dts-jest:pass:snap -> number | "defaults"
R.propOr(defaults, R.__, a_b_number_record)('a');
