import { IDLE } from '../constants/playStates'

import { SEARCH_MUSIC } from '../constants/actions'

const defaultState = IDLE

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_MUSIC:
      return state
    default:
      return state
  }
}
