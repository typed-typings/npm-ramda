import { List, Tap } from '../ramda/dist/src/$types';
import * as R_forEach from '../ramda/dist/src/forEach';

declare const number_list: List<number>;
declare const number_tap: Tap<number>;

// @dts-jest:pass
R_forEach(number_tap);
// @dts-jest:pass
R_forEach(number_tap)(number_list);
// @dts-jest:pass
R_forEach(number_tap, number_list);
