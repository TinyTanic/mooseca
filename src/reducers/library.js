import { SEARCH_MUSIC, LOAD_MUSIC } from '../constants/actions'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_MUSIC:
      return action.payload.songs || []
    case LOAD_MUSIC:
      return action.payload.songs || []
    default:
      return state
  }
}
