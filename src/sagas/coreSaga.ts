import { put, takeEvery } from 'redux-saga/effects';

import { CoreActionsEnum } from '../enums/CoreActionsEnum';
import { coreSetLang, coreSetTheme } from '../actions/coreActions';
import { LangEnum } from '../enums/LangEnum';
import { ThemeEnum } from '../enums/ThemeEnum';

export function* watchCoreSaga() {
  yield takeEvery(CoreActionsEnum.CORE_GET_LANG, coreGetLangSaga);
  yield takeEvery(ThemeEnum.CORE_GET_THEME_IS_DARK, coreGetThemeSaga);
}

export function* coreGetLangSaga() {
  try {
    let lang = /^ru\b/.test(window.navigator.language) ? LangEnum.RU : LangEnum.EN;
    const storageLang = localStorage.getItem('lang');
    if (storageLang) {
      lang = storageLang.toUpperCase() as LangEnum;
    }
    yield put(coreSetLang(lang));
  } catch {
    //
  } finally {
    //
  }
}
export function* coreGetThemeSaga() {
  try {
    const storageTheme = localStorage.getItem('theme');
    yield put(coreSetTheme(storageTheme === 'dark'));
  } catch {
    //
  } finally {
    //
  }
}
