import * as R from '../ramda/dist/index';

declare const path: R.Path;

// @dts-jest:pass:snap
R.lensPath(path);
// @dts-jest:pass:snap
R.lensPath<object, number[]>(path);
