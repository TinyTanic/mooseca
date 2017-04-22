import {libraryDb, albumsDb, artistsDb} from '../db'

import {walk, reindex} from '../lib/library'

export function scanLibrary(libraryPath, dispatch) {
  return (dispatch, getState) => {
    console.log('scanLibrary');
    console.log(libraryPath);

    return walk(libraryPath).then(
      reindex()).then(() => {
      dispatch({type: 'LIBRARY_SCAN', error: null})
    }).catch((err) => {
      dispatch({type: 'LIBRARY_SCAN', error: err})
    })
  }
}

export function loadLibrary(libraryPath, dispatch) {
  return (dispatch, getState) => {
    console.log('scanLibrary');
    console.log(libraryPath);

    return reindex().then(() => {
      dispatch({type: 'LIBRARY_SCAN', error: null})
    }).catch((err) => {
      dispatch({type: 'LIBRARY_SCAN', error: err})
    })
  }
}

export function getSongs() {
  return (dispatch, getState) => {
    let find = { }

    libraryDb.find(find, (err, songs) => {
      dispatch({
        type: 'LIBRAY_SONGS_GET',
        songs: songs,
        error: err || null
      })
    })
  }
}

export function getSongsByAlbum(album, dispatch) {
  let findAlbum = {
    album: album
  }

  console.log(songs);
  libraryDb.find(findAlbum, (err, songs) => {
    findAlbum.songs = songs
    dispatch({
      type: 'LIBRARY_GET',
      selectedAlbum: findAlbum,
      error: err || null
    })
  })
}

export function getAlbums() {
  return (dispatch, getState) => {
    albumsDb.find({}).sort({title: 1}).exec((err, albums) => {
      dispatch({
        type: 'LIBRAY_ALBUMS_GET',
        albums: albums,
        error: err || null
      })
    })
  }
}

export function getArtists(dispatch) {
  return (dispatch, getState) => {
    albumsDb.find({}).sort({artist: 1}).exec((err, artists) => {
      dispatch({
        type: 'LIBRAY_ARTISTS_GET',
        artists: artists,
        error: err || null
      })
    })
  }
}
