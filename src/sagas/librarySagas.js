import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import  { walk, reindex }  from '../lib/library'

function* loadAlbumArtists() {
  yield call(reindex)
}

function* loadLibrary() {
  console.log('WOOOOOORKSSSS');
  yield call(reindex)
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLibraryScan() {
  yield* takeEvery('LIBRARY_SCAN', loadAlbumArtists)
}

export function* watchLibraryPath() {
  yield* takeEvery('SETTING_GET_LIBRARY_PATH', loadLibrary)
}
