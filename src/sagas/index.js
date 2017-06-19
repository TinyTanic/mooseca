import { playSong, pauseSong } from './play'
import {
  searchMusic,
  loadMusic,
  loadMusicOrderByAuthor,
  loadMusicOrderByAlbum,
} from './library'
import { loadAlbum } from './album'
import { loadArtists } from './artists'

function* rootSagas() {
  yield [
    playSong(),
    pauseSong(),
    searchMusic(),
    loadMusic(),
    loadMusicOrderByAuthor(),
    loadMusicOrderByAlbum(),
    loadAlbum(),
    loadArtists(),
  ]
}

export default rootSagas
