import { Morphism } from '../ramda/dist/src/$types';
import R_ap = require('../ramda/dist/src/ap');

declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];

// @dts-jest:pass:snap
R_ap([string_to_number])(string_array);
// @dts-jest:pass:snap
R_ap([string_to_number], string_array);
