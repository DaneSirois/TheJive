const utilities_module = require('./utilities_module.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const util = require('util');

const inspect = (o, d = 1) => {
  console.log(util.inspect(o, { colors: true, depth: d }));
  return o;
};

// Socket IO:
const http = require('http');
const server = http.createServer();
const socket_io = require('socket.io');
server.listen(3001);
const io = socket_io();

io.attach(server);

io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  const emit__action = (type, payload) => socket.emit('action', { type, payload });
  const broadcast__action = (type, payload) => io.emit('action', { type, payload });

  socket._user = {
    id: socket.id,
    username: "Anonymous",
    color: utilities_module.generateRandomColor()
  };

  broadcast__action('ADD_USER', Object.assign({}, socket._user, { ourself: true }));

  Object.keys(io.sockets.sockets)
    .map((id) => io.sockets.sockets[id]._user) //Get all connected user's info
    .filter((user) => user.id !== socket.id) //Exclude yourself
    .forEach((user) => emit__action('ADD_USER', user));

  socket.on('action', (action) => {
    switch (action.type) {
      case 'server/NEW_MESSAGE':
        socket._user.username = action.payload.username || "Anonymous";
        broadcast__action('NEW_MESSAGE', {
          color: socket._user.color,
          username: action.payload.username,
          message: action.payload.message
        });
        break;
      case 'server/UPDATE_USERNAME':
        socket._user.username = action.payload || "Anonymous";
        broadcast__action('UPDATE_USERNAME', socket._user);
        emit__action('GET_USER', socket._user);
        break;
      case 'server/UPDATE_NAME_COLOR':
        socket._user.color = action.payload.color;
        broadcast__action('UPDATE_NAME_COLOR', socket._user);
        break;
    }
  });

  socket.on('disconnect', function(){
    broadcast__action('REMOVE_USER', socket._user);
  });
});

// Dev server:
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Running at http://0.0.0.0:3000');
});