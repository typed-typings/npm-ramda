import { Morphism, Reduced, Transformer } from './$types';

// NOTE: morphism transducer is just a fake type for built-in transformer: R.take, R.drop, etc.
export function $<T, U>(
  transducer:
    | Morphism<T[], U>
    | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>,
  fn: (accumulator: U, value: T) => U | Reduced<U>,
  initial: U,
  values: T[],
): U;
