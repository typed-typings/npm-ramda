import * as R from '../ramda/dist/index';

declare const a_b_number_record: Record<'a' | 'b', number>;

// @dts-jest:pass:snap -> <T extends Record<"a", any>>(list: R.List<T>) => Pick<T, "a">[]
R.project(['a']);
// @dts-jest:pass:snap -> Pick<Record<"a" | "b", number>, "a">[]
R.project(['a'])([a_b_number_record, a_b_number_record]);

// @dts-jest:pass:snap -> Pick<Record<"a" | "b", number>, "a">[]
R.project(['a'], [a_b_number_record, a_b_number_record]);

// @dts-jest:pass:snap -> <K extends "a" | "b">(keys: R.List<K>) => Pick<Record<"a" | "b", number>, K>[]
R.project(R.__, [a_b_number_record, a_b_number_record]);
// @dts-jest:pass:snap -> Pick<Record<"a" | "b", number>, "a">[]
R.project(R.__, [a_b_number_record, a_b_number_record])(['a']);
