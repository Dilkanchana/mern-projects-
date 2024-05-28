const socketio = require('socket.io');

const socketSetup = (server) => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', (message) => {
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = socketSetup;

