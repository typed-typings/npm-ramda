import * as R_propEq from '../ramda/dist/src/propEq';

declare const string: string;
declare const object: object;

// @dts-jest:pass
R_propEq(string, string);
// @dts-jest:pass
R_propEq(string)(string)(object);
// @dts-jest:pass
R_propEq(string, string, object);
