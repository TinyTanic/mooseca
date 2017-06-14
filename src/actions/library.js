import { sagalize } from '../utils/sagalizator'
import { SEARCH_MUSIC, LOAD_MUSIC } from '../constants/actions'

export const search = dir => ({
  type: sagalize(SEARCH_MUSIC),
  payload: { dir },
})

export const searchSaga = (songs, error) => ({
  type: SEARCH_MUSIC,
  payload: { songs },
  error,
})

export const load = where => ({
  type: sagalize(LOAD_MUSIC),
  payload: { where },
})

export const loadSaga = (songs, error) => ({
  type: LOAD_MUSIC,
  payload: songs,
  error,
})
