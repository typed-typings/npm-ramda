import { Property } from '../ramda/dist/src/$types';
import * as R_lensProp from '../ramda/dist/src/lensProp';

declare const property: Property;

// @dts-jest:pass
R_lensProp(1);
// @dts-jest:pass
R_lensProp('x');
// @dts-jest:pass
R_lensProp(property);
// @dts-jest:pass
R_lensProp<number, object>(property);
