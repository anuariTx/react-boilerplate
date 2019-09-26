import { createSelector } from 'reselect';

import { IAppState } from '@rdx/root.reducer';

export const _getActiveTheme = (state: IAppState) => state.theme.activeTheme;

export const getActiveThemeState = createSelector([_getActiveTheme], (theme) => theme);