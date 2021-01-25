var socket = io();

socket.on('connect', function () {
  console.log('Connected to the server');
});

socket.on('disconnect', function () {
  console.log('connection lost');
});

socket.emit('sendMessage', {
  user: 'Juliuxx',
  message: 'Sup!'
}, function (res) {
  console.log('server response: ', res);
});

socket.on('sendMessage', function (data) {
  console.log('Server: ', data);
});