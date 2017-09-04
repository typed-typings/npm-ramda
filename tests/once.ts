import R_once = require('../ramda/dist/src/once');

declare const T_to_T: <T>(value: T) => T;

// @dts-jest:pass:snap
R_once(T_to_T);
