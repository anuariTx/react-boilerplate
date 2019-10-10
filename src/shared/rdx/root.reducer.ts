import { combineReducers } from 'redux';

import { IThemeState, themeReducer } from '@themes/theme.reducer';
import { ILangState, langReducer } from '@languages/lang.reducer';

export interface IAppState {
  theme: IThemeState;
  lang: ILangState;
}

export const RootReducer = combineReducers<IAppState>({
  theme: themeReducer,
  lang: langReducer,
});
