import { IDLE } from '../constants/playStates'

import { PLAY } from '../constants/actions'

const defaultState = IDLE

export default (state = defaultState, action) => {
  switch (action.type) {
    case PLAY:
      return state
    default:
      return state
  }
}
