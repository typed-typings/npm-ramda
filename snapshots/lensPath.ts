import { Path } from '../ramda/dist/src/$types';
import * as R_lensPath from '../ramda/dist/src/lensPath';

declare const path: Path;

// @dts-jest:pass -> ManualLens<{}, {}>
R_lensPath(path);
// @dts-jest:pass -> ManualLens<object, number[]>
R_lensPath<object, number[]>(path);
