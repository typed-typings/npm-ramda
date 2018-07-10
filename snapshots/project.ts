import * as R from '../ramda/dist/index';

declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass:snap -> <T extends Record<"a", any>>(list: T[] | ArrayLike<T>) => Pick<T, "a">[]
R.project(['a']);
// @dts-jest:pass:snap -> Pick<Record<"a" | "b", number>, "a">[]
R.project(['a'])([a_b_number_record, a_b_number_record]);

// @dts-jest:pass:snap -> Pick<Record<"a" | "b", number>, "a">[]
R.project(['a'], [a_b_number_record, a_b_number_record]);

// @dts-jest:pass:snap -> <K extends "a" | "b">(keys: K[] | ArrayLike<K>) => Pick<Record<"a" | "b", number>, K>[]
R.project(R.__, [a_b_number_record, a_b_number_record]);
// @dts-jest:pass:snap -> Pick<Record<"a" | "b", number>, "a">[]
R.project(R.__, [a_b_number_record, a_b_number_record])(['a']);
