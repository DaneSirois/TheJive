const utilities_module = require('./utilities_module.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const http = require('http');
const server = http.createServer();
const socket_io = require('socket.io');
server.listen(3001);
const io = socket_io();

// Sockets:

io.attach(server);

io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on('action', (action) => {
    if(action.type === 'server/NEW_MESSAGE'){
      console.log('new message received!', action.payload);
      io.emit('action', {
        type: "NEW_MESSAGE", 
        payload: {
          username: action.payload.username,
          message: action.payload.message
        }
      });
    }
  });

  socket.on('action', (action) => {
    if(action.type === 'server/ADD_USER'){
      console.log('Adding the user to the list', action.payload);
      io.emit('action', {
        type: "ADD_USER", 
        payload: {
          id: socket.id,
          username: action.payload.username,
          color: utilities_module.generateRandomColor()
        }
      });
    }
  });

  socket.on('action', (action) => {
    if(action.type === 'server/GET_USERID'){
      io.emit('action', {
        type: "GET_USERID", 
        payload: {
          id: socket.id
        }
      });
    }
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