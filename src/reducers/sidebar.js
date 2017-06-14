import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../constants/actions'

const defaultState = false

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return true
    case HIDE_SIDEBAR:
      return false
    default:
      return state
  }
}
