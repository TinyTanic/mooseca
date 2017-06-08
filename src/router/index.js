import { views } from '../constants'

import songs from './songs'

import Null from '../components/views/Null'
import Songs from '../components/views/Songs'
const routingTable = {
  [views.LIST]: { view: Songs, props: songs },
}

const router = state =>
  routingTable[state.view]
    ? {
        ...routingTable[state.view],
        props: routingTable[state.view].props(state),
      }
    : { view: Null, props: {} }

export default router
