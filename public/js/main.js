//sockets
var socket = io();
$('form').submit(function(){
	socket.emit('chat message', $('#m').val());
$('#m').val('');
	return false;
});
socket.on('chat message', function(msg){
	$('#messages').append($('<li>').text(msg));
});


//socket to port code
  socket.on('toScreen', function (data) {
    console.log(data.hello);

	var value = data.hello;


    $(document).ready(function(){
		if(value >= 40.00 && value <= 60.00){
			socket.on('chat message', function(str){
				socket.emit('chat message', $('#messages').append($('<li>').text('Can someone get me some tea!')));
			});
		}
		else if(value >= 60.00 && value <= 80.00){
			socket.on('chat message', function(str){
				socket.emit('chat message', $('#messages').append($('<li>').text('I need a hug!')));
			});
		}
		else if(value >= 80.00 && value <= 100.00) {
			socket.on('chat message', function(str){
				socket.emit('chat message', $('#messages').append($('<li>').text('Code still doesn\'t work. Help me!')));
			});
		}
		else if(value >= 100.00 && value <= 120.00) {
			socket.on('chat message', function(str){
				socket.emit('chat message', $('#messages').append($('<li>').text('Having a mental breakdown here!')));
			});
		}
		 else {
			console.log("value");
		}
    });
  });