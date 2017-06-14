import { SEARCH_MUSIC, LOAD_MUSIC } from '../constants/actions'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_MUSIC:
      return action.payload
    case LOAD_MUSIC:
      return { songs: action.payload }
    default:
      return state
  }
}
