import { sagalize } from '../utils/sagalizator'
import { LOAD_ALBUM } from '../constants/actions'

export const loadAlbum = () => ({
  type: sagalize(LOAD_ALBUM),
})

export const loadAlbumSaga = (albums, error) => ({
  type: LOAD_ALBUM,
  payload: { albums },
  error,
})
