import { sagalize } from '../utils/sagalizator'
import { LOAD_ARTISTS, LOAD_ARTISTS_ALBUMS } from '../constants/actions'

export const loadArtists = () => ({
  type: sagalize(LOAD_ARTISTS),
})

export const loadArtistsSaga = (artists, error) => ({
  type: LOAD_ARTISTS,
  payload: { artists },
  error,
})

export const loadArtistsAlbums = artist => ({
  type: sagalize(LOAD_ARTISTS_ALBUMS),
  payload: { artist },
})

export const loadArtistsAlbumsSaga = (artist, error) => ({
  type: LOAD_ARTISTS_ALBUMS,
  payload: { artist },
  error,
})
