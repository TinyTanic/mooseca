import {
  watchLibraryScan,
  watchLibraryPath,
} from './librarySagas'

import {
  getLibraryPath,
} from './settingsSagas'

function* bootstrap() {
  yield* getLibraryPath()
}


export function* rootSaga() {
  yield [
    bootstrap(),
    watchLibraryScan(),
    watchLibraryPath(),
  ]
}
