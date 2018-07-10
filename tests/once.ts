import * as R from '../ramda/dist/index';

declare const T_to_T: <T>(value: T) => T;

// @dts-jest:pass:snap
R.once(T_to_T);
