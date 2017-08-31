import { Reduced } from '../ramda/dist/src/$types';
import R_reduced = require('../ramda/dist/src/reduced');

declare const object: object;
declare const reduced_object: Reduced<object>;

// @dts-jest:pass:snap -> Reduced<object>
R_reduced(object);
// @dts-jest:pass:snap -> Reduced<object>
R_reduced(reduced_object);
