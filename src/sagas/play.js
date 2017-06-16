import { call, put, takeEvery } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { PLAY, PAUSE } from '../constants/actions'

import { play, pause } from '../workers/play'
import { playSaga, pauseSaga } from '../actions/play'

export function* playSong() {
  yield takeEvery(sagalize(PLAY), function* _handlePlaySong(action) {
    try {
      const { response, error } = yield call(
        play,
        action.payload.song,
        action.meta.player
      )
      if (error) throw error
      yield put(playSaga(action.payload.song, response))
    } catch (error) {
      yield put(playSaga(null, null, error))
    }
  })
}

export function* pauseSong() {
  yield takeEvery(sagalize(PAUSE), function* _handlePlaySong(action) {
    try {
      const { response, error } = yield call(pause, action.meta.player)
      if (error) throw error
      yield put(pauseSaga(response))
    } catch (error) {
      yield put(pauseSaga(null, error))
    }
  })
}
