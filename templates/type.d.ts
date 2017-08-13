export function $null(value: null): 'Null';
export function $undefined(value: undefined): 'Undefined';
export function $boolean(value: boolean): 'Boolean';
export function $number(value: number): 'Number';
export function $string(value: string): 'String';
export function $symbol(value: symbol): 'Symbol';
export function $general(value: any): string;
