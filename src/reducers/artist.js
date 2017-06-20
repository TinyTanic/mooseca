import { LOAD_ARTISTS_ALBUMS } from '../constants/actions'

export const artist = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ARTISTS_ALBUMS:
      return action.payload.artist || state
    default:
      return state
  }
}
