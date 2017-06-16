import {
  IDLE,
  PLAY as PLAY_STATE,
  PAUSE as PAUSE_STATE,
} from '../constants/playStates'

import { PLAY, PAUSE } from '../constants/actions'

const defaultState = IDLE

export default (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_STATE:
      return PLAY
    case PAUSE_STATE:
      return PAUSE
    default:
      return state
  }
}
