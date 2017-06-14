import { SONGS } from '../constants/views'

import { CHANGE_VIEW } from '../constants/actions'

const defaultState = SONGS

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.payload.view
    default:
      return state
  }
}
