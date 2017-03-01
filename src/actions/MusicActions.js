var socket = require('socket.io-client')('http://localhost:9876');

export function playMusic(song) {
  return (dispatch, getState) => {
    socket.emit('play', {
      song: 'data/music.mp3'
    });
    socket.on('resp', resp => {
      if (resp === 'ok') console.log('play song');
    })

    dispatch({
      type: 'MUSIC',
      playbackState: 'play',
      error: null
    })
  }
}

export function stopMusic() {
  return (dispatch, getState) => {
    
    dispatch({
      type: 'MUSIC',
      playbackState: 'stop',
      error: null
    })
  }
}

export function pauseMusic() {
  return (dispatch, getState) => {
    socket.emit('pause', {});
    socket.on('resp', resp => {
      console.log('canzone startata correttamente');
    })

    dispatch({
      type: 'MUSIC',
      state: 'pause',
      error: null
    })
  }
}
