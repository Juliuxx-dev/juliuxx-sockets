const { io } = require('../server');

io.on('connection', (client) => {
  console.log('User connected');

  client.emit('sendMessage', {
    user: 'Admin',
    message: '¡Welcome to this application!'
  });

  client.on('disconnect', () => {
    console.log('Client disconnected')
  });

  client.on('sendMessage', (data, callback) => {
    console.log(data);

    client.broadcast.emit('sendMessage', data);

    // if (data.user) {
    //   callback({
    //     ok: true,
    //     message: 'All good'
    //   });
    // } else if (callback) {
    //   callback({
    //     ok: false,
    //     message: 'Something is wrong'
    //   });
    // }
  });
});