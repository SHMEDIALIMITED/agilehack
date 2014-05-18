/*jshint laxcomma:true*/

var sio
  , chat
  , counter = 1
  , express = require('express')
  , http = require('http')
  , app = express()
  , env = process.env.NODE_ENV || 'development'
  , port = process.env.PORT || 3000;

if (env == 'development') {
	// configure development here
}

if (env == 'production') {
	// configure production here
}


app.use(express['static'](__dirname + '/public/app'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.redirect('app/index.html');
});


server = http.createServer(app);
sio = require('socket.io').listen(server);
chat = require('chat.io').createChat(sio.of('/chat'));

sio.configure(function () {
  sio.of('/chat').authorization(function (handshake, callback) {
    handshake.nickname = 'AloUser' + counter++;
    callback(null, true);
  });
});

console.log('Running express in ' + env + ' mode on port ' + port);
server.listen(port);
