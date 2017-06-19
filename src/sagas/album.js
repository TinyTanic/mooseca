import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { LOAD_ALBUMS, LOAD_ALBUMS_SONGS } from '../constants/actions'

import { loadAlbumWorker, loadAlbumsSongsWorker } from '../workers/album'
import { loadAlbumSaga, loadAlbumsSongsSaga } from '../actions/album'

export function* loadAlbum() {
  yield takeEvery(sagalize(LOAD_ALBUMS), function* _handleAlbum(action) {
    try {
      const albums = yield call(loadAlbumWorker)
      yield put(loadAlbumSaga(albums))
    } catch (error) {
      yield put(loadAlbumSaga(null, error))
    }
  })
}

export function* loadAlbumsSongs() {
  yield takeEvery(sagalize(LOAD_ALBUMS_SONGS), function* _handleAlbumsSongs(
    action
  ) {
    try {
      const album = action.payload.album || { title: '', artist: '' }
      const songs = yield call(loadAlbumsSongsWorker, album)
      yield put(loadAlbumsSongsSaga(songs))
    } catch (error) {
      yield put(loadAlbumsSongsSaga(null, error))
    }
  })
}
