import { sagalize } from '../utils/sagalizator'
import { SEARCH_MUSIC } from '../constants/actions'

export const search = () => ({
  type: sagalize(SEARCH_MUSIC),
})

export const searchSaga = () => ({
  type: SEARCH_MUSIC,
})
