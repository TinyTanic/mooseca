import { LOAD_ALBUMS_SONGS } from '../constants/actions'

const defaultState = { title: '', artist: '', picture: '', songs: [] }

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ALBUMS_SONGS:
      return action.payload.album || state
    default:
      return state
  }
}
