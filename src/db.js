
const Datastore = require('nedb');
import series from 'async/series';

export const libraryDb = new Datastore({
   filename: __dirname + '/../data/library.json'
});

export const settingsDb = new Datastore({
   filename: __dirname + '/../data/settings.json'
});

export const albumsDb = new Datastore({
   inMemoryOnly: true
});

export const artistsDb = new Datastore({
   inMemoryOnly: true
});


export const load = (cb) => {
   series([
      function(callback) {
         settingsDb.loadDatabase(function(err) {
            console.log(settingsDb);
            callback(err)
         });
      },
      function(callback) {
         libraryDb.loadDatabase(function(err) {
            console.log(libraryDb);
            callback(err)
         });
      },
      function(callback) {
         albumsDb.loadDatabase(function(err) {
            console.log(albumsDb);
            callback(err)
         });
      },
      function(callback) {
         artistsDb.loadDatabase(function(err) {
            console.log(artistsDb);
            callback(err)
         });
      },
   ], cb);
}
