export const play = () =>
  new Promise(() => {
    // code that play a song
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
export const stop = () =>
  new Promise(() => {
    // code that stop a song
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
export const next = () =>
  new Promise(() => {
    // code that play the next song
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
export const prev = () =>
  new Promise(() => {
    // code that play the prev song
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
export const pause = () =>
  new Promise(() => {
    // code that pause a song
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
