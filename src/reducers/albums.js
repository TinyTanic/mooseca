import { LOAD_ALBUMS, LOAD_ALBUMS_SONGS } from '../constants/actions'

export const albums = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALBUMS:
      return action.payload.albums || []
    default:
      return state
  }
}

export const album = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ALBUMS_SONGS:
      return action.payload.album || []
    default:
      return state
  }
}
