import { keyboardLayouts, IKeyboardLayouts } from '@ngx-material-keyboard/core';

/**
 * @description Virtual keyboard layouts for the demographic form.
 * Same as the library defaults, except Portuguese gets a top row with the accented
 * letters as their own keys (the standard layout only offers them through dead keys).
 * Each key is [normal, shift].
 */
const PORTUGUESE = 'Português';

const portugueseAccentRow = [
  ['á', 'Á'], // á Á
  ['à', 'À'], // à À
  ['â', 'Â'], // â Â
  ['ã', 'Ã'], // ã Ã
  ['é', 'É'], // é É
  ['ê', 'Ê'], // ê Ê
  ['í', 'Í'], // í Í
  ['ó', 'Ó'], // ó Ó
  ['ô', 'Ô'], // ô Ô
  ['õ', 'Õ'], // õ Õ
  ['ú', 'Ú'], // ú Ú
  ['ü', 'Ü'], // ü Ü
  ['ç', 'Ç']  // ç Ç
];

export const portalKeyboardLayouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  [PORTUGUESE]: {
    ...keyboardLayouts[PORTUGUESE],
    keys: [portugueseAccentRow, ...keyboardLayouts[PORTUGUESE].keys]
  }
};
