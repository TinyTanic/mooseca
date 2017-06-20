import { LOAD_ARTISTS } from '../constants/actions'

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_ARTISTS:
      return action.payload.artists || state
    default:
      return state
  }
}
