import { sagalize } from '../utils/sagalizator'
import {
  SEARCH_MUSIC,
  LOAD_MUSIC,
  LOAD_ORDER_BY_AUTHOR,
  LOAD_ORDER_BY_ALBUM,
} from '../constants/actions'

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
  payload: { songs },
  error,
})

export const loadOrderByAuthor = order => ({
  type: sagalize(LOAD_ORDER_BY_AUTHOR),
  payload: { order },
})

export const loadOrderByAuthorSaga = (songs, error) => ({
  type: LOAD_ORDER_BY_AUTHOR,
  payload: { songs },
  error,
})

export const loadOrderByAlbum = order => ({
  type: sagalize(LOAD_ORDER_BY_ALBUM),
  payload: { order },
})

export const loadOrderByAlbumSaga = (songs, error) => ({
  type: LOAD_ORDER_BY_ALBUM,
  payload: { songs },
  error,
})
