import { combineReducers } from 'redux'

import view from './view'
import songs from './songs'
import play from './play'
import library from './library'
import albums from './album'
import sidebar from './sidebar'
import player from './player'
import song from './song'
import artists from './artists'

export default combineReducers({
  view,
  songs,
  play,
  library,
  albums,
  sidebar,
  player,
  song,
  artists,
})
