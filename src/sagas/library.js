import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import {
  SEARCH_MUSIC,
  LOAD_MUSIC,
  LOAD_ORDER_BY_AUTHOR,
  LOAD_ORDER_BY_ALBUM,
} from '../constants/actions'

import {
  walk,
  load,
  loadOrderByAuthor,
  loadOrderByAlbum,
} from '../workers/library'
import {
  searchSaga,
  loadSaga,
  loadOrderByAuthorSaga,
  loadOrderByAlbumSaga,
} from '../actions/library'

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

export function* loadMusicOrderByAlbum() {
  yield takeEvery(
    sagalize(LOAD_ORDER_BY_ALBUM),
    function* _handleLoadMusicOrderByAlbum(action) {
      try {
        let order = action.payload.order || 'CRESCENT'
        let songs = yield call(loadOrderByAlbum, order)
        yield put(loadOrderByAlbumSaga(songs))
      } catch (error) {
        yield put(loadOrderByAlbumSaga(null, error))
      }
    }
  )
}
