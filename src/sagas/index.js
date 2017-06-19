import { playSong, pauseSong } from './play'
import {
  searchMusic,
  loadMusic,
  loadMusicOrderByAuthor,
  loadMusicOrderByAlbum,
} from './library'
import { loadAlbums, loadAlbumsSongs } from './albums'

function* rootSagas() {
  yield [
    playSong(),
    pauseSong(),
    searchMusic(),
    loadMusic(),
    loadMusicOrderByAuthor(),
    loadMusicOrderByAlbum(),
    loadAlbums(),
    loadAlbumsSongs(),
  ]
}

export default rootSagas
