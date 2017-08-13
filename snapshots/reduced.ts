import { Reduced } from '../ramda/dist/src/$types';
import * as R_reduced from '../ramda/dist/src/reduced';

declare const object: object;
declare const reduced_object: Reduced<object>;

// @dts-jest:pass -> Reduced<object>
R_reduced(object);
// @dts-jest:pass -> Reduced<object>
R_reduced(reduced_object);
