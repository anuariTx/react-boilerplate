import { createSelector } from 'reselect';

import { IAppState } from '@rdx/root.reducer';

export const _getActiveLanguage = (state: IAppState) => state.lang.activeLanguage;

export const getActiveLanguageState = createSelector(
  [_getActiveLanguage],
  language => language,
);
