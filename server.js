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


var auth = express.Router();

auth.get('/', function (req, res) {
    var tok = (Math.random() + Math.random() + Math.random() + Math.random() + Math.random()).toString().replace('.','');
    res.send(200, {token: tok});
});


//APP ROUTES
app.use("/auth", auth);
app.use(express['static'](__dirname + '/public/app'));

app.get('/', function (req, res) {
  res.redirect('app/index.html');
});

<<<<<<< HEAD
//LAUNCH THE PONY
=======
>>>>>>> 2c9f72e90deb0f9e48d470855053867c9455bb54

server = http.createServer(app);
sio = require('socket.io').listen(server);
chat = require('chat.io').createChat(sio.of('/chat'));

sio.configure(function () {
  sio.of('/chat').authorization(function (handshake, callback) {
    //Create an auth function that generates an auth-id and passes it on the header
    handshake.auth= "AUTHGOESHERE";
    handshake.nickname = 'AloUser' + counter++;
    console.log(handshake);
    callback(null, true);
  });
});

<<<<<<< HEAD
chat.on('join', function (user) {
        message.append(user + ' joined your channel.');
    });

=======
>>>>>>> 2c9f72e90deb0f9e48d470855053867c9455bb54
console.log('Running express in ' + env + ' mode on port ' + port);
server.listen(port);
