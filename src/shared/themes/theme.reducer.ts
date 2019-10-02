import { handleActions } from 'redux-actions';

import { IAction } from '@interfaces/action.interface';

import { changeThemeAction } from '@themes/theme.action';

export interface IThemeState {
  activeTheme: string;
  isLoadingTheme: boolean;
}

const INITIAL_STATE: IThemeState = {
  activeTheme: 'lightTheme',
  isLoadingTheme: false,
};

export const themeReducer = handleActions(
  {
    [changeThemeAction.TRIGGER]: (state: IThemeState) => ({
      ...state,
      isLoadingTheme: true,
    }),
    [changeThemeAction.FULFILL]: (state: IThemeState, { payload }: IAction) => ({
      activeTheme: payload.theme,
      isLoadingTheme: false,
    }),
  },
  INITIAL_STATE,
);
