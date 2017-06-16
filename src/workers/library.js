const fs = require('fs')
const path = require('path')
const id3 = require('id3js')
const Normalize = require('../utils/normalize').default

import { libraryDb, albumsDb, artistsDb, load as loadDB } from '../db'

export const search = dir => {
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
  return new Promise(resolve => {
    loadDB()
    return resolve(search(dir))
  }).then(list => {
    // console.log(list)
    let promises = []
    list.forEach(element => {
      let file = path.resolve(element)
      if (file.indexOf('.mp3') > 0) {
        promises.push(_walk(file))
      }
    })
    return Promise.all(promises)
  })
}

const _walk = file => {
  return new Promise((resolve, reject) => {
    id3(
      {
        file: file,
        type: id3.OPEN_LOCAL,
      },
      (err, tags) => {
        console.log(tags)
        if (err) {
          return reject(err)
        }
        let base64 = tags.v2.image
          ? Normalize.hexToBase64(tags.v2.image.data)
          : null
        if (base64) {
          base64 = 'data:' + tags.v2.image.mime + ';base64,' + base64
        }
        let metaTag = {
          path: file,
          title: tags.title,
          artist: Normalize.toUnicode((tags.artist || 'Unknown').trim()),
          album: Normalize.toUnicode((tags.album || 'Unknown').trim()),
          // image: base64
        }

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
      }
    )
  })
}

export const load = where => {
  console.log('load')
  return new Promise((resolve, reject) => {
    //loadDB()
    libraryDb.find(where, function(err, docs) {
      if (err) reject(err)
      resolve(docs)
    })
  })
}

export const loadOrderByAuthor = order => {
  let songs = load({})
  songs.sort((song1, song2) => {
    if (order == 'DECRESCENT')
      return song1.author.toUpperCase() > song2.author.toUpperCase()
    else return song1.author.toUpperCase() < song2.author.toUpperCase()
  })
  return songs
}

export const reindex = () => {
  console.log('reindex')
  return new Promise((resolve, reject) => {
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
