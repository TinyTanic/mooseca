import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { SEARCH_MUSIC } from '../constants/actions'

import { search } from '../workers/library'
import { searchSaga } from '../actions/library'

export function* searchMusic() {
  yield takeEvery(sagalize(SEARCH_MUSIC), function* _handleSearch(action) {
    try {
      let dir = action.payload.dir || `${require('os').homedir()}/Music`
      console.log('search music on ' + dir)
      const response = yield call(search, dir)
      //if (error) throw error
      yield put(searchSaga(response))
    } catch (error) {
      yield put(searchSaga(null, error))
    }
  })
}
