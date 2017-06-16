import {
  SEARCH_MUSIC,
  LOAD_MUSIC,
  LOAD_ORDER_BY_AUTHOR,
} from '../constants/actions'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_MUSIC:
      return action.payload.songs || []
    case LOAD_MUSIC:
      return action.payload.songs || []
    case LOAD_ORDER_BY_AUTHOR:
      return action.payload.songs || []
    default:
      return state
  }
}
