import { PLAY, PAUSE } from '../constants/actions'

import { sagalize } from '../utils/sagalizator'

export const play = song => ({
  type: sagalize(PLAY),
  payload: { song },
})

export const playSaga = (song, player, error) => ({
  type: PLAY,
  payload: { song, player },
  error,
})

export const pause = () => ({
  type: sagalize(PAUSE),
})

export const pauseSaga = (player, error) => ({
  type: PAUSE,
  payload: { player },
  error,
})
