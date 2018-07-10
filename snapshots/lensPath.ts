import * as R from '../ramda/dist/index';

declare const path: R.Path;

// @dts-jest:pass:snap -> ManualLens<{}, {}>
R.lensPath(path);
// @dts-jest:pass:snap -> ManualLens<object, number[]>
R.lensPath<object, number[]>(path);
