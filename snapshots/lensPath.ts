import * as R from '../ramda/dist/index';

declare const path: R.Path;

// @dts-jest:pass:snap -> R.ManualLens<{}, {}>
R.lensPath(path);
// @dts-jest:pass:snap -> R.ManualLens<object, number[]>
R.lensPath<object, number[]>(path);
