import { Morphism, Reduced, Transformer } from './$types';

// NOTE: morphism transducer is just a fake type for built-in transformer: R.take, R.drop, etc.
export function $transformer<T, U>(
  initial: Transformer<T, U, U>,
  transducer:
    | Morphism<T[], U>
    | ((
        transformer: Transformer<T, U, U>,
      ) => (accumulator: U, value: T) => U | Reduced<U>),
  values: T[],
): U;
export function $base<T, V extends string | object>(
  initial: V,
  transducer:
    | Morphism<T[], V>
    | ((
        transformer: Transformer<T, V, V>,
      ) => (accumulator: V, value: T) => V | Reduced<V>),
  values: T[],
): V;
export function $mixed<T, U>(
  initial: Transformer<T, U, U> | U,
  transducer:
    | Morphism<T[], U>
    | ((
        transformer: Transformer<T, U, U>,
      ) => (accumulator: U, value: T) => U | Reduced<U>),
  values: T[],
): U;
