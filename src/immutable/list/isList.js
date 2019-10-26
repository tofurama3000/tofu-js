import { isListSym } from './__list-sym';

export function isList(obj) {
  return typeof obj === 'object' && !!obj && !!obj[isListSym];
}
