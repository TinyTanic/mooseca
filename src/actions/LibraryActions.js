var fs = require('fs');
var path = require('path');
var id3 = require('id3js');

var Normalize = require('../libs/normalize').default

import {
   libraryDb,
   albumsDb,
   artistsDb
} from '../db'

var walk = function(dir, done) {
   var results = [];
   fs.readdir(dir, function(err, list) {
      if (err) return done(err);
      var pending = list.length;
      if (!pending) return done(null, results);
      list.forEach(function(file) {
         file = path.resolve(dir, file);
         fs.stat(file, function(err, stat) {
            if (stat && stat.isDirectory()) {
               walk(file, function(err, res) {
                  results = results.concat(res);
                  if (!--pending) {
                     done(null, results);
                  }
               });
            } else {
               if (file.indexOf('.mp3') > 0)
                  id3({
                     file: file,
                     type: id3.OPEN_LOCAL
                  }, function(err, tags) {
                     // tags now contains your ID3 tags
                     //   console.log(tags);
                     // console.log({
                     //    path: file,
                     //    title: tags.title,
                     //    artist: tags.artist,
                     //    album: tags.album,
                     // });
                     let base64 = tags.v2.image ? Normalize.hexToBase64(tags.v2.image.data) : null
                     if (base64) {
                        base64 = 'data:'+tags.v2.image.mime+';base64,' + base64
                     }
                     // console.log(base64);
                     libraryDb.update({
                        path: file
                     }, {
                        path: file,
                        title: tags.title,
                        artist: tags.artist,
                        album: tags.album,
                        // image: base64
                     }, {
                        upsert: true
                     }, function(err, numReplaced, upsert) {
                        // numReplaced = 1, upsert = { _id: 'id5', planet: 'Pluton', inhabited: false }
                        // A new document { _id: 'id5', planet: 'Pluton', inhabited: false } has been added to the collection
                     });
                  });
               results.push(file);
               if (!--pending) done(null, results);
            }
         });
      });
   });
};


const reindex = (cb) => {
   const albums = []
   const artists = []

   let albumKey = ''
   let artistKey = ''

   libraryDb.find({}, function(err, docs) {
      for (var i = 0; i < docs.length; i++) {
         // console.log(docs[i]);
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
            albumsList.push(albums[key]);
         }
      }

      const artistsList = []
      for (let key of Object.keys(artists)) {
         if (artists[key]) {
            artistsList.push(artists[key]);
         }
      }

      albumsDb.insert(albumsList, (err, newDocs) => {
         console.log(newDocs);
         artistsDb.insert(artistsList, (err, newDocs) => {
            console.log(newDocs);
            cb()
         })
      })
   });
}


export function scanLibrary(libraryPath, dispatch) {
   console.log('scanLibrary');
   console.log(libraryPath);


   walk(libraryPath, (err) => {
      console.log(err);
      reindex((artists, albums) => {
         // console.log(artists, albums);
         dispatch({
            type: 'LIBRARY_SCAN',
            error: err || null
         })
      })
   })
}

export function getSongsByAlbum(album, dispatch) {
   let findAlbum = {
      album: album
   }

   libraryDb.find(findAlbum, (err, songs) => {
      console.log(songs);
      findAlbum.songs = songs
      dispatch({
         type: 'LIBRARY_GET',
         selectedAlbum: findAlbum,
         error: err || null
      })
   })
}

export function getAlbums(dispatch) {
   albumsDb.find({}).sort({ title: 1 }).exec((err, albums) => {
      dispatch({
         type: 'LIBRAY_ALBUMS_GET',
         albums: albums,
         error: err || null
      })
   })
}

export function getArtists(dispatch) {
   albumsDb.find({}).sort({ artist: 1 }).exec((err, artists) => {
      dispatch({
         type: 'LIBRAY_ARTISTS_GET',
         artists: artists,
         error: err || null
      })
   })
}
