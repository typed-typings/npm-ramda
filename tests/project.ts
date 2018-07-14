import * as R from '../ramda/dist/index';

declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass:snap
R.project(['a']);
// @dts-jest:pass:snap
R.project(['a'])([a_b_number_record, a_b_number_record]);

// @dts-jest:pass:snap
R.project(['a'], [a_b_number_record, a_b_number_record]);

// @dts-jest:pass:snap
R.project(R.__, [a_b_number_record, a_b_number_record]);
// @dts-jest:pass:snap
R.project(R.__, [a_b_number_record, a_b_number_record])(['a']);
