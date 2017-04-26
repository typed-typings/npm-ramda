import { Obj } from '../interfaces'

interface MapObjIndexed {
  // <T, V, M extends Obj<T>>
  // (fn: (value?: T, key?: string, obj?: M) => V, obj: M): Obj<V>;

  // <K extends string, V,
  //   O extends {[index in K]: V}, R extends {[index in K]: V}>
  //   (fn: (value?: O[K], key?: K, obj?: O) => R[K], obj: O): R;

  <R extends {[K in keyof O]}, O extends { [P in K]: any }, K extends string>
  (fn: (value?: O[K], key?: K, obj?: O) => R[K], obj: O): R;

  //<T, V, M extends Obj<T>>(fn: (value?: T, key?: string, obj?: M) => V, obj: M): Obj<V>;
  // <T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?: M) => V): (obj: M) => Obj<V>;

  // // Record
  // <T, U, K extends string>(f: (value: T, key: string, obj?: Record<K, T>) => U, obj: Obj<T>): Obj<U>;
  // <T, U, K extends string>(f: (value: T, key: string, obj?: Record<K, T>) => U): <K extends string>(obj: Obj<T>) => Obj<U>;

}

declare const mapObjIndexed: MapObjIndexed

export = mapObjIndexed
