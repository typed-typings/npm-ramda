- `$curriedFunctions.ts`: special codegen types without jsdoc binding

- `*.r.ts`: manual constant with jsdoc binding
- `*.d.ts`: manual funciton prototypes with jsdoc binding and auto-currying
- `*.c.ts`: codegen funciton prototypes with jsdoc binding and auto-currying
- `*.ts`: codegen funciton prototypes with jsdoc binding

- `$*.d.ts`: manual types without jsdoc binding
- `$*.ts`: codegen types without jsdoc binding

- `README.md`: a placeholder file for gulp

---

`*.d.ts`: function declarations should be prefixed with `$`.

For example:

(add.d.ts)

function without overloads should be named `$`.

```ts
export function $(a: number, b: number): number;
```

(map.d.ts)

function with overloads should be named `$name`, where `name` is their selectable overload id.

```ts
export function $list<T, U>(fn: Morphism<T, U>, list: List<T>): U[];
export function $functor<T, U>(fn: Morphism<T, U>, functor: Functor<T>): Functor<U>;
export function $object<T, U, K extends string>(fn: Morphism<T, U>, object: Record<K, T>): Record<K, U>;
```
