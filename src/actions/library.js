import { sagalize } from '../utils/sagalizator'
import { SEARCH_MUSIC } from '../constants/actions'

export const search = dir => ({
  type: sagalize(SEARCH_MUSIC),
  payload: { dir },
})

export const searchSaga = (list, error) => ({
  type: SEARCH_MUSIC,
  payload: list,
  error,
})
