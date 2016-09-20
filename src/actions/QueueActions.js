
import {
   libraryDb,
   albumsDb,
   artistsDb
} from '../db'

function push(queue, dispatch) {
   return (dispatch, getState) => {
      dispatch({
         type: 'QUEUE_PUSH',
         queue: queue,
         error: err || null
      })
   }
}

function replace(queue, dispatch) {
   return (dispatch, getState) => {
      dispatch({
         type: 'QUEUE_REPLACE',
         queue: queue
      })
   }
}

export function pushAlbum(album, dispatch) {
   libraryDb.find({ album: album.title }, (err, songs) => {
      push(songs, dispatch)
   })
}

export function replaceWithAlbum(album, dispatch) {
   libraryDb.find({ album: album.title }, (err, songs) => {
      replace(songs, dispatch)
   })
}


export function changeMode(mode, dispatch) {
   return (dispatch, getState) => {
      dispatch({
         type: 'QUEUE_CHANGE_MODE',
         mode: mode
      })
   }
}
