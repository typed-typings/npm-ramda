import { List, Tap } from '../ramda/dist/src/$types';
import R_forEach = require('../ramda/dist/src/forEach');

declare const number_list: List<number>;
declare const number_tap: Tap<number>;

// @dts-jest:pass:snap
R_forEach(number_tap);
// @dts-jest:pass:snap
R_forEach(number_tap)(number_list);
// @dts-jest:pass:snap
R_forEach(number_tap, number_list);
