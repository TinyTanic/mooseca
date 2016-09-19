import {
   musicReducer
} from './MusicReducers'
import {
   libraryReducer
} from './LibraryReducers'
import {
   settingsReducer
} from './SettingsReducers'
import {
   queueReducer
} from './QueueReducers'

import {
   combineReducers
} from 'redux'

export const reducers = combineReducers({
   music: musicReducer,
   library: libraryReducer,
   queue: queueReducer,
   settings: settingsReducer,
});
