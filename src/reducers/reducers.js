import * as MusicActions from '../actions/MusicActions'

import {
   musicReducer
} from './MusicReducers'

import {
   combineReducers
} from 'redux'

export const reducers = combineReducers({
   music: musicReducer
});
