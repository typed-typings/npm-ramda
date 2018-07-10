import * as R from '../ramda/dist/index';

declare const object: object;
declare const string: string;

// @dts-jest:pass:snap
R.omit([string])(object);
// @dts-jest:pass:snap
R.omit([string], object);

// @dts-jest:pass:snap
R.omit([string])(object);
// @dts-jest:pass:snap
R.omit([string], object);

// @dts-jest:pass:snap
R.omit(['a', 'b'], { a: 1, b: 2, c: 3 });
// @dts-jest:pass:snap
R.omit(['a', 'b'])({ a: 1, b: 2, c: 3 });
