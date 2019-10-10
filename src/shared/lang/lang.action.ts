import { createRoutine } from 'redux-saga-routines';

import { CHANGE_LANGUAGE } from '@rdx/action-types';

export const changeLanguageAction = createRoutine(CHANGE_LANGUAGE);
