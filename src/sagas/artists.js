import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { LOAD_ARTISTS } from '../constants/actions'

import { loadArtistsWorker } from '../workers/artists'
import { loadArtistsSaga } from '../actions/artists'

export function* loadArtists() {
  yield takeEvery(sagalize(LOAD_ARTISTS), function* _handleArtists(action) {
    try {
      const artists = yield call(loadArtistsWorker)
      yield put(loadArtistsSaga(artists))
    } catch (error) {
      yield put(loadArtistsSaga(null, error))
    }
  })
}
