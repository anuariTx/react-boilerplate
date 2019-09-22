import { createSelector } from 'reselect';

import { IAppState } from '@rdx/root.reducer';

interface IThemeSelector {
    _getActiveTheme: (state: IAppState) => string;
    getActiveThemeState: any; 
}

export class ThemeSelector implements IThemeSelector{
    _getActiveTheme = (state: IAppState) => state.theme.activeTheme;
    public getActiveThemeState = createSelector([this._getActiveTheme], (theme) => theme);
}