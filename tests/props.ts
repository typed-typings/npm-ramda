import * as R from '../ramda/dist/index';

declare const a_b_c_number_record: Record<'a' | 'b' | 'c', number>;

// @dts-jest:pass:snap
R.props(['a', 'b']);
// @dts-jest:pass:snap
R.props(['a', 'b'])(a_b_c_number_record);

// @dts-jest:pass:snap
R.props(['a', 'b'], a_b_c_number_record);

// @dts-jest:pass:snap
R.props(R.__, a_b_c_number_record);
// @dts-jest:pass:snap
R.props(R.__, a_b_c_number_record)(['a', 'b']);
