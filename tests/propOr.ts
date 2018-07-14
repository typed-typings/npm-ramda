import * as R from '../ramda/dist/index';

declare const a_b_number_record: Record<'a' | 'b', number>;
declare const defaults: 'defaults';

// @dts-jest:pass:snap
R.propOr(defaults, 'a');
// @dts-jest:pass:snap
R.propOr(defaults, 'a')(a_b_number_record);

// @dts-jest:pass:snap
R.propOr(defaults, 'a', a_b_number_record);
// @dts-jest:pass:snap
R.propOr(defaults, 'a', undefined);

// @dts-jest:pass:snap
R.propOr(defaults, R.__, a_b_number_record);
// @dts-jest:pass:snap
R.propOr(defaults, R.__, a_b_number_record)('a');
