import { sagalize } from '../utils/sagalizator'
import { LOAD_ALBUMS, LOAD_ALBUMS_SONGS } from '../constants/actions'

export const loadAlbum = () => ({
  type: sagalize(LOAD_ALBUMS),
})

export const loadAlbumSaga = (albums, error) => ({
  type: LOAD_ALBUMS,
  payload: { albums },
  error,
})

export const loadAlbumsSongs = album => ({
  type: sagalize(LOAD_ALBUMS_SONGS),
  payload: { album },
})

export const loadAlbumsSongsSaga = (songs, error) => ({
  type: LOAD_ALBUMS_SONGS,
  payload: { songs },
  error,
})
