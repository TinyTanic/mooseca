import { Howl } from 'howler'

export const play = (song, player) =>
  new Promise(resolve => {
    if (player) {
      player.stop()
    }
    resolve(
      new Howl({
        src: song.path,
        autoplay: true,
      })
    )
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))

export const stop = () =>
  new Promise(() => {})
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

export const pause = player =>
  new Promise(resolve => {
    player.pause()
    resolve(player)
  })
    .then(response => ({ response }))
    .catch(error => ({ error }))
