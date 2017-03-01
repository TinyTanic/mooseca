var fs = require('fs');
var path = require('path');
var id3 = require('id3js');
var Normalize = require('../lib/normalize').default

import {libraryDb, albumsDb, artistsDb} from '../db'

export var searchMusic = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = searchMusic(dir + '/' + file, filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};

export const walk = function(dir) {
  return new Promise(function(resolve, reject) {
    var results = [];
    fs.readdir(dir, function(err, list) {
      if (err)
        return reject(err);
      var pending = list.length;
      if (!pending)
        return resolve(null, results);
      list.forEach(function(file) {
        file = path.resolve(dir, file);
        fs.stat(file, function(err, stat) {
          if (stat && stat.isDirectory()) {
            walk(file, function(err, res) {
              results = results.concat(res);
              if (!--pending) {
                resolve(null, results);
              }
            });
          } else {
            if (file.indexOf('.mp3') > 0)
              id3({
                file: file,
                type: id3.OPEN_LOCAL
              }, function(err, tags) {
                let base64 = tags.v2.image
                  ? Normalize.hexToBase64(tags.v2.image.data)
                  : null
                if (base64) {
                  base64 = 'data:' + tags.v2.image.mime + ';base64,' + base64
                }
                libraryDb.update({
                  path: file
                }, {
                  path: file,
                  title: tags.title,
                  artist: Normalize.toUnicode((tags.artist || 'Unknown').trim()),
                  album: Normalize.toUnicode((tags.album || 'Unknown').trim()),
                  // image: base64
                }, {
                  upsert: true
                }, function(err, numReplaced, upsert) {
                  // numReplaced = 1, upsert = { _id: 'id5', planet: 'Pluton', inhabited: false }
                  // A new document { _id: 'id5', planet: 'Pluton', inhabited: false } has been added to the collection
                });
              });
            results.push(file);
            if (!--pending)
              resolve(null, results);
            }
          });
      });
    });
  });
};

export const reindex = () => {
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
            artist: Normalize.toUnicode(docs[i].artist)
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
          albumsList.push(albums[key]);
        }
      }

      const artistsList = []
      for (let key of Object.keys(artists)) {
        if (artists[key]) {
          artistsList.push(artists[key]);
        }
      }
      console.log('create lib');
      albumsDb.insert(albumsList, (err, newDocs) => {
        console.log(newDocs);
        artistsDb.insert(artistsList, (err, newDocs) => {
          console.log(newDocs);
          resolve(albumsList, artistsList)
        })
      })
    });
  })
}
