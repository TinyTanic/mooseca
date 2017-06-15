import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { SEARCH_MUSIC, LOAD_MUSIC } from '../constants/actions'

import { walk, load } from '../workers/library'
import { searchSaga, loadSaga } from '../actions/library'

export function* searchMusic() {
  yield takeEvery(sagalize(SEARCH_MUSIC), function* _handleSearch(action) {
    try {
      let dir = action.payload.dir || `${require('os').homedir()}/Musica`
      console.log('search music on ' + dir)
      const songs = yield call(walk, dir)
      yield put(searchSaga(songs))
    } catch (error) {
      yield put(searchSaga(null, error))
    }
  })
}

export function* loadMusic() {
  yield takeEvery(sagalize(LOAD_MUSIC), function* _handleLoad(action) {
    try {
      let where = {}
      const songs = yield call(load, where)
      yield put(loadSaga(songs))
    } catch (error) {
      yield put(loadSaga(null, error))
    }
  })
}
