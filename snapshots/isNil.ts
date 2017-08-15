import * as R_isNil from '../ramda/dist/src/isNil';

declare const string: string;

// @dts-jest:pass -> (value: any) => value is null | undefined
R_isNil;

// @dts-jest:pass -> boolean
R_isNil(string);
