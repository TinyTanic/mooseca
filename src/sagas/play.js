import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { PLAY } from '../constants/actions'

import { play } from '../workers/play'
import { playSaga } from '../actions/play'

export function* playSong() {
  yield takeEvery(sagalize(PLAY), function* _handlePlaySong(action) {
    try {
      const { response, error } = yield call(play, action.payload.song)
      console.log(response, error)
      if (error) throw error
      yield put(playSaga(action.payload.song, response.play))
    } catch (error) {
      yield put(playSaga(null, null, error))
    }
  })
}
