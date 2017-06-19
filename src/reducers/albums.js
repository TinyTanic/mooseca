import { LOAD_ALBUM } from '../constants/actions'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ALBUM:
      return action.payload.albums || []
    default:
      return state
  }
}
