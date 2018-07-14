import * as R from '../ramda/dist/index';

declare const property: R.Property;

// @dts-jest:pass:snap -> R.PseudoLens<1>
R.lensProp(1);
// @dts-jest:pass:snap -> R.PseudoLens<"x">
R.lensProp('x');
// @dts-jest:pass:snap -> R.ManualLens<{}, {}>
R.lensProp(property);
// @dts-jest:pass:snap -> R.ManualLens<number, object>
R.lensProp<number, object>(property);
