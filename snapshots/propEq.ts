import * as R from '../ramda/dist/index';

declare const string: string;
declare const object: object;

// @dts-jest:pass:snap -> (object: {}) => boolean
R.propEq(string, string);
// @dts-jest:pass:snap -> boolean
R.propEq(string)(string)(object);
// @dts-jest:pass:snap -> boolean
R.propEq(string, string, object);
