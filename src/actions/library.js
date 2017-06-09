import { sagalize } from '../utils/sagalizator'
import { SEARCH_MUSIC } from '../costants/actions'


export const search = () => ({
  type: sagalize(SEARCH_MUSIC)
})

export const searchSaga
