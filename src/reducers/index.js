import { combineReducers } from 'redux'

import view from './view'
import songs from './songs'
import play from './play'
import library from './library'
import albums from './albums'
import albumsSongs from './albumsSongs'
import sidebar from './sidebar'
import player from './player'
import song from './song'

export default combineReducers({
  view,
  songs,
  play,
  library,
  albums,
  albumsSongs,
  sidebar,
  player,
  song,
})
