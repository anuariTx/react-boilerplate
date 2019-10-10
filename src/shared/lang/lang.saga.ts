import { takeLatest, put } from 'redux-saga/effects';

import { changeLanguageAction } from '@languages/lang.action';

function* changeLanguageTrigger(params: any) {
  yield put(
    changeLanguageAction.fulfill({
      theme: params.payload,
    }),
  );
}

export function* changeThemeSaga() {
  yield takeLatest(changeLanguageAction.TRIGGER, changeLanguageTrigger);
}
