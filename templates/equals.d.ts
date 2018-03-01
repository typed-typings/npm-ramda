export function $null<T>(a: null, b: T | null): boolean;
export function $undefined<T>(a: undefined, b: T | undefined): boolean;
export function $general<T>(a: T, b: T): boolean;
