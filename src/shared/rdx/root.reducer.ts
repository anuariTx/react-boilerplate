import { combineReducers } from 'redux';

import { ThemeStateInterface, themeReducer } from '@themes/theme.reducer';

export interface IAppState {
  theme: ThemeStateInterface;
}

export const RootReducer = combineReducers<IAppState>({
  theme: themeReducer,
});
