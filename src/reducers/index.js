import { combineReducers } from 'redux'

import view from './view'
import songs from './songs'
import play from './play'
import library from './library'
import sidebar from './sidebar'
import player from './player'

export default combineReducers({ view, songs, play, library, sidebar, player })
