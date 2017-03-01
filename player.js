let Player = require('player')
//
// let player = new Player('data/music.mp3')
//
// player.play()
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(9876);

function handler(req, res) {}

let player = null
io.on('connection', function(socket) {
  console.log('Moosica Player connected');
  socket.on('play', function(data) {
    if (!player) {
      player = new Player(data.song)
      player.play()
      console.log(`Play ${data.song}`);
    } else {
      player.pause()
      console.log(`Resume ${data.song}`);
    }
    socket.emit('resp', {data: 'ok'})
  });
  socket.on('pause', () => {
    if (player) {
      console.log(`Pause current song`);
      player.pause()
    }
    socket.emit('resp', {data: 'ok'})
  })
  socket.on('disconnect', () => {
    if (player) {
      player.stop()
      player = null
    }
    console.log('Moosica Player disconnected');
  })
});
console.log('Starting Mooseca Player daemon...');
