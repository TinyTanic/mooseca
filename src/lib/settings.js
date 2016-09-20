import { settingsDb } from '../db'

export const readOrInitialize = (key, defaultValue) => {
  return new Promise((resolve, reject) => {
    settingsDb.find({ key: key }, function (err, docs) {
      if (err || !docs || docs.length < 0 || !docs[0]) {
        settingsDb.insert({key: key, value: defaultValue}, function (err, newDocs) {
          if (err) reject(err)
          else resolve(defaultValue)
        })
      } else {
        if (err) reject(err)
        else resolve(docs[0].value)
      }
    })
  })
}
