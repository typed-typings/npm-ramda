import { Variadic } from './$types';

// tslint:disable-next-line:no-unused no-unused-variable
declare function call<T>(fn: Variadic<T>, ...args: any[]): T;
