import * as R from '../ramda/dist/index';

declare const path: R.Path;
declare const number: number;
declare const object: object;

// @dts-jest:pass:snap
R.pathOr(number, path);

// @dts-jest:pass:snap
R.pathOr(number)(path)(object);
// @dts-jest:pass:snap
R.pathOr(number, path, object);
