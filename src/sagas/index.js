import { playSong, pauseSong } from './play'
import {
  searchMusic,
  loadMusic,
  loadMusicOrderByAuthor,
  loadMusicOrderByAlbum,
} from './library'
import { loadAlbums, loadAlbumsSongs } from './albums'
import { loadArtists } from './artists'

function* rootSagas() {
  yield [
    playSong(),
    pauseSong(),
    searchMusic(),
    loadMusic(),
    loadMusicOrderByAuthor(),
    loadMusicOrderByAlbum(),
    loadAlbums(),
    loadArtists(),
    loadAlbumsSongs(),
  ]
}

export default rootSagas
