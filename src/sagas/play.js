import { call, put, takeEvery, select } from 'redux-saga/effects'
import { sagalize } from '../utils/sagalizator'

import { PLAY, PAUSE } from '../constants/actions'

import {
  IDLE,
  PLAY as PLAY_STATE,
  PAUSE as PAUSE_STATE,
} from '../constants/playStates'

import { play, pause, resume } from '../workers/play'
import { playSaga, pauseSaga } from '../actions/play'

const getPlayState = state => state.play
const getCurrSong = state => state.song
const getFirstLibSong = state => state.library[0]

export function* playSong() {
  yield takeEvery(sagalize(PLAY), function* _handlePlaySong(action) {
    try {
      const playState = yield select(getPlayState)
      const currSong = yield select(getCurrSong)

      let finalResp = {}
      if (playState === IDLE) {
        const { response, error } = yield call(play, action.payload.song)
        if (error) throw error
        finalResp = response
      } else if (playState === PAUSE_STATE) {
        const { response, error } = yield call(resume, action.meta.player)
        if (error) throw error
        finalResp = { song: currSong, player: response }
      } else if (playState === PLAY_STATE) {
        const { response, error } = yield call(
          play,
          action.payload.song,
          action.meta.player
        )
        if (error) throw error
        finalResp = response
      }

      console.log(currSong, finalResp)
      yield put(playSaga(finalResp.song, finalResp.player))
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
