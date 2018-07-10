import * as R from '../ramda/dist/index';

declare const property: R.Property;

// @dts-jest:pass:snap -> PseudoLens<1>
R.lensProp(1);
// @dts-jest:pass:snap -> PseudoLens<"x">
R.lensProp('x');
// @dts-jest:pass:snap -> ManualLens<{}, {}>
R.lensProp(property);
// @dts-jest:pass:snap -> ManualLens<number, object>
R.lensProp<number, object>(property);
