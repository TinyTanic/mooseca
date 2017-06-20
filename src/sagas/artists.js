import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { LOAD_ARTISTS, LOAD_ARTISTS_ALBUMS } from '../constants/actions'

import { loadArtistsWorker, loadArtistsAlbumsWorker } from '../workers/artists'
import { loadArtistsSaga, loadArtistsAlbumsSaga } from '../actions/artists'

export function* loadArtists() {
  yield takeEvery(sagalize(LOAD_ARTISTS), function* _handleArtists() {
    try {
      const artists = yield call(loadArtistsWorker)
      yield put(loadArtistsSaga(artists))
    } catch (error) {
      yield put(loadArtistsSaga(null, error))
    }
  })
}

export function* loadArtistsAlbums() {
  yield takeEvery(sagalize(LOAD_ARTISTS_ALBUMS), function* _handleArtistsAlbums(
    action
  ) {
    try {
      const artist = yield call(loadArtistsAlbumsWorker, action.payload.artist)
      yield put(loadArtistsAlbumsSaga(artist))
    } catch (error) {
      yield put(loadArtistsAlbumsSaga(null, error))
    }
  })
}
