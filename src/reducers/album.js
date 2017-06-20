import { LOAD_ALBUMS_SONGS } from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_ALBUMS_SONGS:
      return action.payload.album || []
    default:
      return state
  }
}
