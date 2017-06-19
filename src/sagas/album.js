import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { LOAD_ALBUM } from '../constants/actions'

import { loadAlbumWorker } from '../workers/album'
import { loadAlbumSaga } from '../actions/album'

export function* loadAlbum() {
  yield takeEvery(sagalize(LOAD_ALBUM), function* _handleAlbum(action) {
    try {
      const albums = yield call(loadAlbumWorker)
      yield put(loadAlbumSaga(albums))
    } catch (error) {
      yield put(loadAlbumSaga(null, error))
    }
  })
}
