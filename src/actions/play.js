import { PLAY } from '../constants/actions'

import { sagalize } from '../utils/sagalizator'

export const play = song => ({
  type: sagalize(PLAY),
  payload: { song },
})

export const playSaga = (song, play, error) => ({
  type: PLAY,
  payload: { song },
  error,
})
