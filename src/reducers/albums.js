import { LOAD_ALBUMS } from '../constants/actions'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ALBUMS:
      return action.payload.albums || []
    default:
      return state
  }
}
