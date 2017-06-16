import { playSong, pauseSong } from './play'
import {
  searchMusic,
  loadMusic,
  loadMusicOrderByAuthor,
  loadMusicOrderByAlbum,
} from './library'

function* rootSagas() {
  yield [
    playSong(),
    pauseSong(),
    searchMusic(),
    loadMusic(),
    loadMusicOrderByAuthor(),
    loadMusicOrderByAlbum(),
  ]
}

export default rootSagas
