import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { SEARCH_MUSIC } from '../constants/actions'

import { walk } from '../workers/library'
import { searchSaga } from '../actions/library'

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
