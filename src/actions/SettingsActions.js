import { settingsDb } from '../db'

const readOrInitialize = (key, defaultValue, cb) => {
   settingsDb.find({ key: key }, function (err, docs) {
      if (err || !docs || docs.length < 0 || !docs[0]) {
         settingsDb.insert({key: key, value: defaultValue}, function (err, newDocs) {
            cb(err, defaultValue)
         })
      } else {
         cb(err, docs[0].value)
      }
   })
}

export function getSetting(key, defaultValue, dispatch) {
   const settings = {}
   readOrInitialize(key, defaultValue, (err, value) => {
      if (err) throw err
      settings[key] = value
      dispatch({
         type: 'SETTING_GET',
         settings: settings,
         error: err || null
      })
   })
}
