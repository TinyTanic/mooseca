import { LOAD_ARTISTS_ALBUMS } from '../constants/actions'

const defaultState = { name: '', albums: '' }

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ARTISTS_ALBUMS:
      return action.payload.artist || state
    default:
      return state
  }
}
