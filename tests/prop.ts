import * as R from '../ramda/dist/index';

declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass:snap
R.prop('a');
// @dts-jest:pass:snap
R.prop('a')(a_b_number_record);

// @dts-jest:pass:snap
R.prop('a', a_b_number_record);

// @dts-jest:pass:snap
R.prop(R.__, a_b_number_record);
// @dts-jest:pass:snap
R.prop(R.__, a_b_number_record)('a');
