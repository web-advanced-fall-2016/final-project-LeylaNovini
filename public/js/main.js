//adjust localhost and port
// var url ='localhost';
// var port = 8000;
// var socket = io.connect('localhost:8000');

//sockets adjust accordingly
var socket = io();
$('form').submit(function(){
	socket.emit('chat message', $('#m').val());
$('#m').val('');
	return false;
});
socket.on('chat message', function(msg){
	$('#messages').append($('<li>').text(msg));
});


//socket to port code=
 //  socket.on('toScreen', function (data) {
 //    console.log(data.hello);

	// var value = data.hello;
 //    // var hip = document.getElementById('hip');
 //   	// var hop = document.getElementById('hop');
 //   	// var hipTrue = false;

 //    $(document).ready(function(){
	// 	if(value >= 40.00 && value <= 60.00){
	// 		socket.on('chat message', function(str){
	// 			// $('form').submit(function(){
	// 			// socket.emit('chat message', $('#m').val('I need a hug!'));
	// 			socket.emit('chat message', $('#messages').append($('<li>').text('Can someone get me some tea!')));
	// 			// $('#m').val('');
	// 			// 	return false;
	// 		// });
	// 			// $('#messages').append($('<li>').text(str));
	// 		});
	// 	}
	// 	else if(value >= 60.00 && value <= 80.00){
	// 		socket.on('chat message', function(str){
	// 			// $('form').submit(function(){
	// 			// socket.emit('chat message', $('#m').val('I need a hug!'));
	// 			socket.emit('chat message', $('#messages').append($('<li>').text('I need a hug!')));
	// 			// $('#m').val('');
	// 			// 	return false;
	// 		// });
	// 			// $('#messages').append($('<li>').text(str));
	// 		});
	// 	}
	// 	else if(value >= 80.00 && value <= 100.00) {
	// 		socket.on('chat message', function(str){
	// 			// $('form').submit(function(){
	// 			// socket.emit('chat message', $('#m').val('I need a hug!'));
	// 			socket.emit('chat message', $('#messages').append($('<li>').text('Code still doesn\'t work. Help me!')));
	// 			// $('#m').val('');
	// 			// 	return false;
	// 		// });
	// 			// $('#messages').append($('<li>').text(str));
	// 		});
	// 	}
	// 	else if(value >= 100.00 && value <= 120.00) {
	// 		socket.on('chat message', function(str){
	// 			// $('form').submit(function(){
	// 			// socket.emit('chat message', $('#m').val('I need a hug!'));
	// 			socket.emit('chat message', $('#messages').append($('<li>').text('Having a mental breakdown here!')));
	// 			// $('#m').val('');
	// 			// 	return false;
	// 		// });
	// 			// $('#messages').append($('<li>').text(str));
	// 		});
	// 	}
	// 	 else {
	// 		console.log("value");
	// 	}
 //    });

 //    // socket.emit('playSong', function(data){ 
 //    // });
 //  });