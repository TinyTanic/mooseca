import { SONGS, ALBUM } from '../constants/views'

import songs from './songs'
import album from './album'
import artists from './artists'
import playlist from './playlist'

import Null from '../components/views/Null'
import Songs from '../components/views/Songs'
import Album from '../components/views/Album'

const routingTable = {
  [SONGS]: { view: Songs, props: songs },
  [ALBUM]: { view: Album, props: album },
}

const router = state =>
  routingTable[state.view]
    ? {
        ...routingTable[state.view],
        props: routingTable[state.view].props(state),
      }
    : { view: Null, props: {} }

export default router
