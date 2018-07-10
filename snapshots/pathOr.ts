import * as R from '../ramda/dist/index';

declare const path: R.Path;
declare const number: number;
declare const object: object;

// @dts-jest:pass:snap -> <U>(object: {}) => number | U
R.pathOr(number, path);

// @dts-jest:pass:snap -> number | {}
R.pathOr(number)(path)(object);
// @dts-jest:pass:snap -> number | {}
R.pathOr(number, path, object);
