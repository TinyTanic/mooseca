import { combineReducers } from 'redux'

import view from './view'
import songs from './songs'
import play from './play'
import library from './library'
import sidebar from './sidebar'

export default combineReducers({ view, songs, play, library, sidebar })
