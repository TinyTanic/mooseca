const Datastore = require('nedb');

export const libraryDb = new Datastore({
   filename: __dirname + '/../data/library.json'
});

export const settingsDb = new Datastore({
   filename: __dirname + '/../data/settings.json'
});

export const load = (cb) => {
   settingsDb.loadDatabase(function(settingsErr) {
      console.log(settingsDb);
      libraryDb.loadDatabase(function(libraryErr) {
         console.log(libraryDb);
         cb(settingsErr | libraryErr)
      });
   });
}
