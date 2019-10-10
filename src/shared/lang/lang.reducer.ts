import { handleActions } from 'redux-actions';

import { IAction } from '@interfaces/action.interface';

import { changeLanguageAction } from '@languages/lang.action';

export interface ILangState {
  activeLanguage: string;
  isLoadingLanguage: boolean;
}

const INITIAL_STATE: ILangState = {
  activeLanguage: 'es',
  isLoadingLanguage: false,
};

export const langReducer = handleActions(
  {
    [changeLanguageAction.TRIGGER]: (state: ILangState) => ({
      ...state,
      isLoadingLanguage: true,
    }),
    [changeLanguageAction.FULFILL]: (state: ILangState, { payload }: IAction) => ({
      activeLanguage: payload.theme,
      isLoadingLanguage: false,
    }),
  },
  INITIAL_STATE,
);
