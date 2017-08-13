import { Path } from '../ramda/dist/src/$types';
import * as R_lensPath from '../ramda/dist/src/lensPath';

declare const path: Path;

// @dts-jest:pass
R_lensPath(path);
// @dts-jest:pass
R_lensPath<object, number[]>(path);
