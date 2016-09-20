export function playMusic() {
  return (dispatch, getState) => {
   dispatch({
      type: 'MUSIC',
      state: 'play',
      error: null
   })
  }
}

export function stopMusic() {
  return (dispatch, getState) => {
   player.stop()
   dispatch({
      type: 'MUSIC',
      state: 'stop',
      error: null
   })
  }
}

export function pauseMusic() {
  return (dispatch, getState) => {
   player.pause()
   dispatch({
      type: 'MUSIC',
      state: 'pause',
      error: null
   })
  }
}
