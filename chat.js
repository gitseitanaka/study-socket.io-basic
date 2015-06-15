var app = require('express')();
var http = require('http').Server(app);
//var io = require('socket.io')(http, {'transports': ['websocket']});
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});


io.on('connection', function(socket){

  socket.emit('local', '----');


  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('my other event', function(msg){
    io.emit('local2', msg);
  });


  setTimeout(function() {
    socket.emit('timer', '++++on');
//      io.close();
//        http.listen(3000, function(){
//          console.log('listening on *:3000--');
//        });
  }, 10000);

//  socket.on('disconnect', function () {
//    socket.emit('client - close');
//        http.listen(3000, function(){
//          console.log('listening on *:3000--');
//        });
//  });


});




http.listen(3000, function(){
  console.log('listening on *:3000');
});
