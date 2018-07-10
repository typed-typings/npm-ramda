import * as R from '../ramda/dist/index';

declare const any_to_string: (x: any) => string;
declare const T_to_T: <T>(value: T) => T;

// @dts-jest:pass:snap
R.memoizeWith(any_to_string);
// @dts-jest:pass:snap
R.memoizeWith(any_to_string)(T_to_T);
// @dts-jest:pass:snap
R.memoizeWith(any_to_string, T_to_T);
