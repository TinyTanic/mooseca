//import { libraryDb, load as loadDB } from '../db'
import { loadOrderByAuthor } from './library'

export const loadArtistsWorker = () => {
  console.log('load Artists')
  return loadOrderByAuthor().then(songs => {
    let lastAlbum = { name: '' }
    let artists = []
    songs.forEach(song => {
      if (song.artist !== lastAlbum.name) {
        lastAlbum = {
          name: song.artist,
        }
        artists.push(lastAlbum)
      }
    })
    return artists
  })
}
