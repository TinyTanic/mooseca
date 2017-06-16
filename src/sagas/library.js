import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import {
  SEARCH_MUSIC,
  LOAD_MUSIC,
  LOAD_ORDER_BY_AUTHOR,
} from '../constants/actions'

import { walk, load, loadOrderByAuthor } from '../workers/library'
import { searchSaga, loadSaga, loadOrderByAuthorSaga } from '../actions/library'

export function* searchMusic() {
  yield takeEvery(sagalize(SEARCH_MUSIC), function* _handleSearch(action) {
    try {
      let dir = action.payload.dir || `${require('os').homedir()}/Music`
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

export function* loadMusicOrderByAuthor() {
  yield takeEvery(
    sagalize(LOAD_ORDER_BY_AUTHOR),
    function* _handleLoadMusicOrderByAuthor(action) {
      try {
        let order = action.payload.order || 'CRESCENT'
        let songs = yield call(loadOrderByAuthor, order)
        yield put(loadOrderByAuthorSaga(songs))
      } catch (error) {
        yield put(loadOrderByAuthorSaga(null, error))
      }
    }
  )
}
