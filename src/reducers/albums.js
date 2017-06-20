import { LOAD_ALBUMS } from '../constants/actions'

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_ALBUMS:
      return action.payload.albums || []
    default:
      return state
  }
}
