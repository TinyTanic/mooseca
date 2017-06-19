import { LOAD_ALBUMS_SONGS } from '../constants/actions'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ALBUMS_SONGS:
      return action.payload.songs || []
    default:
      return state
  }
}
