import { libraryDb, albumsDb, artistsDb, load as loadDB } from '../db'
import { loadOrderByAlbum } from './library'

export const loadAlbumWorker = () => {
  console.log('load Album')
  return loadOrderByAlbum().then(songs => {
    let lastAlbum = { title: '', artist: '', picture: '' }
    let albums = []
    songs.forEach(song => {
      if (song.album !== lastAlbum.title || song.artist !== lastAlbum.artist) {
        lastAlbum = {
          title: song.album,
          artist: song.artist,
          picture: song.picture,
        }
        albums.push(lastAlbum)
      }
    })
    return albums
  })
}
