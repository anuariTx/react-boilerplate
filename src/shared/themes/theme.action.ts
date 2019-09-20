import { createRoutine } from 'redux-saga-routines';

import { CHANGE_THEME } from '@rdx/action-types';

export const changeThemeAction = createRoutine(CHANGE_THEME);
