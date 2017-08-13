import { List, PseudoLens } from './$types';

export function $<N extends number>(index: N): PseudoLens<N>;
