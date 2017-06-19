import { LOAD_ARTISTS } from '../constants/actions'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ARTISTS:
      return action.payload.artists || []
    default:
      return state
  }
}
