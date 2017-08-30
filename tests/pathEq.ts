import { Path } from '../ramda/dist/src/$types';
import * as R_pathEq from '../ramda/dist/src/pathEq';

declare const path: Path;
declare const number: number;
declare const object: object;

// @dts-jest:pass:snap
R_pathEq(path, number);
// @dts-jest:pass:snap
R_pathEq(path)(number)(object);
// @dts-jest:pass:snap
R_pathEq(path, number, object);
