import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { LOAD_ALBUMS, LOAD_ALBUMS_SONGS } from '../constants/actions'

import { loadAlbumsWorker, loadAlbumsSongsWorker } from '../workers/albums'
import { loadAlbumsSaga, loadAlbumsSongsSaga } from '../actions/albums'

export function* loadAlbums() {
  yield takeEvery(sagalize(LOAD_ALBUMS), function* _handleAlbums() {
    try {
      const albums = yield call(loadAlbumsWorker)
      yield put(loadAlbumsSaga(albums))
    } catch (error) {
      yield put(loadAlbumsSaga(null, error))
    }
  })
}

export function* loadAlbumsSongs() {
  yield takeEvery(sagalize(LOAD_ALBUMS_SONGS), function* _handleAlbumsSongs(
    action
  ) {
    try {
      const album = action.payload.album || { title: '', artist: '' }
      album.songs = yield call(loadAlbumsSongsWorker, album)

      yield put(loadAlbumsSongsSaga(album))
    } catch (error) {
      yield put(loadAlbumsSongsSaga(null, error))
    }
  })
}
