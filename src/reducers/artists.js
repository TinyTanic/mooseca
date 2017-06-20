import { LOAD_ARTISTS, LOAD_ARTISTS_ALBUMS } from '../constants/actions'

export const artists = (state = [], action) => {
  switch (action.type) {
    case LOAD_ARTISTS:
      return action.payload.artists || state
    default:
      return state
  }
}

export const artist = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ARTISTS_ALBUMS:
      return action.payload.artist || state
    default:
      return state
  }
}
