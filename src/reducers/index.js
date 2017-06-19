import { combineReducers } from 'redux'

import view from './view'
import songs from './songs'
import play from './play'
import library from './library'
import { albums, album } from './albums'
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
  album,
  sidebar,
  player,
  song,
  artists,
})
