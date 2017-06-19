import { sagalize } from '../utils/sagalizator'
import { LOAD_ARTISTS } from '../constants/actions'

export const loadArtists = () => ({
  type: sagalize(LOAD_ARTISTS),
})

export const loadArtistsSaga = (artists, error) => ({
  type: LOAD_ARTISTS,
  payload: { artists },
  error,
})
