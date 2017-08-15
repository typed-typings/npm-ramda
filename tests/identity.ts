import * as R_identity from '../ramda/dist/src/identity';

declare const string: string;
declare const number: number;

// @dts-jest:pass
R_identity(string);
// @dts-jest:pass
R_identity(number);
