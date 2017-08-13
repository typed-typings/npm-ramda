import { Property } from '../ramda/dist/src/$types';
import * as R_lensProp from '../ramda/dist/src/lensProp';

declare const property: Property;

// @dts-jest:pass -> PseudoLens<1>
R_lensProp(1);
// @dts-jest:pass -> PseudoLens<"x">
R_lensProp('x');
// @dts-jest:pass -> ManualLens<{}, {}>
R_lensProp(property);
// @dts-jest:pass -> ManualLens<number, object>
R_lensProp<number, object>(property);
