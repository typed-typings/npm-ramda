import R_isNil = require('../ramda/dist/src/isNil');

declare const string: string;

// @dts-jest:pass:snap -> (value: any) => value is null | undefined
R_isNil;

// @dts-jest:pass:snap -> boolean
R_isNil(string);
