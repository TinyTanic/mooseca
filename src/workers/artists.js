//import { libraryDb, load as loadDB } from '../db'
import { loadOrderByAuthor, loadOrderByAlbum } from './library'
import { generateAlbumsListWorker } from './albums'
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

export const loadArtistsAlbumsWorker = artist => {
  console.log('load Artists\' Albums')
  return loadOrderByAlbum({ artist: artist.name }).then(songs => {
    const artist_return = artist
    artist_return.albums = generateAlbumsListWorker(songs)
    return artist_return
  })
}
