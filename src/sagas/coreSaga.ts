import { put, takeEvery } from 'redux-saga/effects';

import { CoreActionsEnum } from '../enums/CoreActionsEnum';
import {
  coreSetDocs,
  coreSetEvents,
  coreSetLang,
  coreSetNews,
  coreSetShortNews,
  coreSetTeam,
  coreSetTheme,
} from '../actions/coreActions';
import { LangEnum } from '../enums/LangEnum';
import { ThemeEnum } from '../enums/ThemeEnum';
import { fetchNews, fetchShorts } from '../api/newsApi';
import { INews } from '../interfaces/INews';
import { fetchDocs } from '../api/docsApi';
import { IDocs } from '../interfaces/IDocs';
import { IEvents } from '../interfaces/IEvents';
import { fetchEvents } from '../api/eventsApi';
import { ITeam } from '../interfaces/ITeam';
import { fetchTeam } from '../api/teamApi';

export function* watchCoreSaga() {
  yield takeEvery(CoreActionsEnum.CORE_GET_LANG, coreGetLangSaga);
  yield takeEvery(ThemeEnum.CORE_GET_THEME_IS_DARK, coreGetThemeSaga);
  yield takeEvery(CoreActionsEnum.CORE_GET_NEWS, coreGetNewsSaga);
  yield takeEvery(CoreActionsEnum.CORE_GET_SHORT_NEWS, coreGetShortsSaga);
  yield takeEvery(CoreActionsEnum.CORE_GET_DOCS, coreGetDocsSaga);
  yield takeEvery(CoreActionsEnum.CORE_GET_EVENTS, coreGetEventsSaga);
  yield takeEvery(CoreActionsEnum.CORE_GET_TEAM, coreGetTeamSaga);
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

export function* coreGetNewsSaga() {
  try {
    const news: INews[] = yield fetchNews();
    yield put(coreSetNews(news));
  } catch {
    //
  } finally {
    //
  }
}

export function* coreGetShortsSaga() {
  try {
    const shorts: INews[] = yield fetchShorts();
    yield put(coreSetShortNews(shorts));
  } catch {
    //
  } finally {
    //
  }
}

export function* coreGetTeamSaga() {
  try {
    const team: ITeam[] = yield fetchTeam();
    yield put(coreSetTeam(team));
  } catch {
    //
  } finally {
    //
  }
}

export function* coreGetDocsSaga() {
  try {
    const docs: IDocs[] = yield fetchDocs();
    yield put(coreSetDocs(docs));
  } catch {
    //
  } finally {
    //
  }
}

export function* coreGetEventsSaga() {
  try {
    const events: IEvents[] = yield fetchEvents();
    yield put(coreSetEvents(events));
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
