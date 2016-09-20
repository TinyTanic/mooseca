import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

const path = require('path')

import  { readOrInitialize }  from '../lib/settings'

export function* getLibraryPath() {
  yield call(readOrInitialize, 'libraryPath', path.join(process.env[(process.platform == 'win32')
        ? 'USERPROFILE'
        : 'HOME'], 'Musica'))
  yield put({type: 'SETTING_GET_LIBRARY_PATH'})
}
