import { handleActions } from 'redux-actions';
import { IAction } from '@interfaces/action.interface';
import { changeThemeAction } from '@themes/theme.action';

export interface ThemeStateInterface {
  activeTheme: string;
  isLoadingTheme: boolean;
}

const INITIAL_STATE: ThemeStateInterface = {
  activeTheme: 'darkTheme',
  isLoadingTheme: false,
};

export const themeReducer = handleActions(
  {
    [changeThemeAction.TRIGGER]: (state: ThemeStateInterface) => ({
      ...state,
      isLoadingTheme: true,
    }),
    [changeThemeAction.FULFILL]: (state: ThemeStateInterface, { payload }: IAction) => ({
      activeTheme: payload.theme,
      isLoadingTheme: false,
    }),
  },
  INITIAL_STATE,
);
