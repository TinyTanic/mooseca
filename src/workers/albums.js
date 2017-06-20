import { libraryDb, load as loadDB } from '../db'
import { loadOrderByAlbum } from './library'

export const loadAlbumsWorker = () => {
  console.log('load Albums')
  return loadOrderByAlbum().then(songs => {
    return generateAlbumsListWorker(songs)
  })
}

export const generateAlbumsListWorker = songs => {
  console.log('generate Albums By Songs')
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
}

export const loadAlbumsSongsWorker = album => {
  console.log('load Album\'s Songs')
  return new Promise((resolve, reject) => {
    loadDB()
    libraryDb.find(
      { $and: [{ artist: album.artist }, { album: album.title }] },
      (err, docs) => {
        if (err) reject(err)
        resolve(docs)
      }
    )
  })
}
