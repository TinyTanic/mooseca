let Player = require('player');
var socket = require('socket.io-client')('http://localhost:9876');

export function playMusic(song, dispatch) {
   socket.emit('play', {
      song: 'data/music.mp3'
   });
   socket.on('resp', resp => {
      console.log('canzone startata correttamente');
   })

   dispatch({
      type: 'MUSIC',
      playbackState: 'play',
      error: null
   })
}

export function stopMusic(dispatch) {
   // player.stop()
   dispatch({
      type: 'MUSIC',
      playbackState: 'stop',
      error: null
   })
}

export function pauseMusic(dispatch) {

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
