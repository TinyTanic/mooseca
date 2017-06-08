import { combineReducers } from 'redux'

import view from './view'
import songs from './songs'
import play from './play'

export default combineReducers({ view, songs, play })
