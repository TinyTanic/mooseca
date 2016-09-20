let Player = require('player')
   //
   // let player = new Player('data/music.mp3')
   //
   // player.play()
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(9876);

function handler(req, res) {

}

let player = null
io.on('connection', function(socket) {
   socket.on('play', function(data) {
      // console.log(`starting ${data.song}`);
      if (!player) {
         player = new Player(data.song)
         player.play()
      }else{
         player.pause()
      }
      socket.emit('resp', {
         data: 'ok'
      })
   });
   socket.on('pause', () => {
console.log('pausa');
      if (player) {
         player.pause()
      }
      socket.emit('resp', {
         data: 'ok'
      })
   })
});
