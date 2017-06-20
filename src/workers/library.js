const fs = require('fs')
const path = require('path')
const jsmediatags = require('jsmediatags')
const Normalize = require('../utils/normalize').default
const Promise = require('bluebird')

import { libraryDb, albumsDb, artistsDb, load as loadDB } from '../db'

export const search = dir => {
  console.log('save')
  const files = fs.readdirSync(dir)
  let list = []
  files.forEach(file => {
    const completePath = `${dir}/${file}`
    if (fs.statSync(completePath).isDirectory()) {
      list = list.concat(search(completePath))
    } else {
      if (file.match(/\.mp3$/g)) list.push(completePath)
    }
  })
  return list
}

export const walk = dir => {
  console.log('walk')
  return new Promise(resolve => {
    loadDB()
    return resolve(search(dir))
  }).then(list => {
    let promises = []
    list.forEach(element => {
      let file = path.resolve(element)
      if (file.indexOf('.mp3') > 0) {
        promises.push(_walk(file))
      }
    })
    return Promise.all(promises).then(datas => {
      // filtra rimuovendo gli oggetti undefined (trick per non bloccare la Promise.All
      return datas.filter(item => {
        return item
      })
    })
  })
}

const _walk = file => {
  return new Promise(resolve => {
    jsmediatags.read(file, {
      onSuccess: function(info) {
        const tags = info.tags
        let picture = tags.picture
          ? `data:${tags.picture.format};base64,${new Buffer(
              tags.picture.data
            ).toString('base64')}`
          : null
        //TODO: creare un file con picture e caricare l'url sul db
        picture = null
        let metaTag = {
          path: file,
          title: tags.title,
          artist: Normalize.toUnicode((tags.artist || 'Unknown').trim()),
          album: Normalize.toUnicode((tags.album || 'Unknown').trim()),
          picture: picture,
        }
        if (!metaTag.title)
          metaTag.title = () => {
            return file
          }
        if (!metaTag.picture) metaTag.picture = '../data/generic-album.png'

        libraryDb.update(
          {
            path: file,
          },
          metaTag,
          {
            upsert: true,
          }
        )

        resolve(metaTag)
      },
      onError: function(err) {
        console.error(
          `failed to open '${file}'. Cause:( ${err.type} ${err.info} )`
        )
        // return reject(err)
        resolve(undefined)
      },
    })
  })
}

export const load = where => {
  console.log('loadSongs')
  return new Promise((resolve, reject) => {
    loadDB()
    libraryDb.find(where, function(err, docs) {
      if (err) reject(err)
      resolve(docs)
    })
  })
}

export const loadOrderByAuthor = order => {
  console.log('load Songs Ordered By Author')
  return load({}).then(songs => {
    if (songs) {
      songs.sort((song1, song2) => {
        if (order == 'DECRESCENT')
          return song1.artist.toUpperCase() < song2.artist.toUpperCase()
        else return song1.artist.toUpperCase() > song2.artist.toUpperCase()
      })
      return songs
    }
  })
}

export const loadOrderByAlbum = (where, order) => {
  console.log('load Songs Orderd By Album')
  return load(where).then(songs => {
    if (songs) {
      songs.sort((song1, song2) => {
        if (order == 'DECRESCENT')
          return song1.album.toUpperCase() < song2.album.toUpperCase()
        else return song1.album.toUpperCase() > song2.album.toUpperCase()
      })
      return songs
    }
  })
}

// TODO: Old code... check and fix
export const reindex = () => {
  console.log('reindex')
  return new Promise(resolve => {
    const albums = []
    const artists = []

    let albumKey = ''
    let artistKey = ''

    libraryDb.find({}, function(err, docs) {
      for (var i = 0; i < docs.length; i++) {
        artistKey = Normalize.toUnicode((docs[i].artist || 'Unknown').trim())

        if (!artists[artistKey]) {
          artists[artistKey] = {
            artist: Normalize.toUnicode(docs[i].artist),
          }
        }

        albumKey = Normalize.toUnicode((docs[i].album || 'Unknown').trim())

        if (!albums[albumKey]) {
          albums[albumKey] = {
            title: Normalize.toUnicode(albumKey),
            artist: Normalize.toUnicode(docs[i].artist),
            year: Normalize.toUnicode(docs[i].year),
            // image: Normalize.toUnicode(docs[i].image)
          }
          if (docs[i].v2) {
            albums[albumKey].image = docs[i].v2.image
          }
        }
      }

      //  for (var i = 0; i < Object.keys(albums).length; i++) {
      //     albums[Object.keys(albums)[i]]
      //  }
      const albumsList = []
      for (let key of Object.keys(albums)) {
        if (albums[key]) {
          albumsList.push(albums[key])
        }
      }

      const artistsList = []
      for (let key of Object.keys(artists)) {
        if (artists[key]) {
          artistsList.push(artists[key])
        }
      }
      console.log('create lib')

      albumsDb.remove({}, { multi: true }, () => {
        artistsDb.remove({}, { multi: true }, () => {
          albumsDb.insert(albumsList, (err, newDocs) => {
            artistsDb.insert(artistsList, (err, newDocs) => {
              resolve(albumsList, artistsList)
            })
          })
        })
      })
    })
  })
}
