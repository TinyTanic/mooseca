var fs = require('fs');
var path = require('path');
var id3 = require('id3js');
import { libraryDb } from '../db'


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
                  if (!--pending) done(null, results);
               });
            } else {
               if (file.indexOf('.mp3') > 0)
               id3({ file: file, type: id3.OPEN_LOCAL }, function(err, tags) {
                   // tags now contains your ID3 tags
                  // console.log(tags);
                  console.log({
                     path: file,
                     title: tags.title,
                     artist: tags.artist,
                     album: tags.album,
                  });
                  libraryDb.update({
                     path: file
                  }, {
                     path: file,
                     title: tags.title,
                     artist: tags.artist,
                     album: tags.album,
                  }, { upsert: true }, function (err, numReplaced, upsert) {
                    // numReplaced = 1, upsert = { _id: 'id5', planet: 'Pluton', inhabited: false }
                    // A new document { _id: 'id5', planet: 'Pluton', inhabited: false } has been added to the collection
                  });
               });
               // console.log(file);
               results.push(file);
               if (!--pending) done(null, results);
            }
         });
      });
   });
   //   console.log(results);
};



export function scanLibrary(libraryPath, dispatch) {
   console.log('scanLibrary');
   console.log(libraryPath);


   walk(libraryPath, libraryPath, (err)=>{console.log(err);})
}
