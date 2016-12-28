//npm variables
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
var chats = require('./routes/chats');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

//serial port
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0', {
        baudRate: 9600,
        parser: SerialPort.parsers.readline("\n")
});

// Find all chats.
var Chats = require('./models/chat');

Chats.find(function(err, chat_data) {
    if (err) return console.error(err);
    console.dir(chat_data);
});


//each run, if doesn't exsist, database created
mongoose.connect('mongodb://localhost/final-project-LeylaNovini-db');
var db = mongoose.connection;
db.once('open', function(){
	console.log('Connected to Database');
});
db.on('error', function(){
	console.log(err);
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/public');
});

// original socket code
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//serial port with socket
port.on('open', function() {

// in case of an error
port.on('error', function(err) {
  console.log('Error: ', err.message);
})
	io.sockets.on('connection', function (socket) {
	    console.log('Socket connected');
	    //connecting port into socket
	    port.on('data', function(data, msg, str) {
	    var res = data.split(",");
	    console.log(res[0]);
	    		socket.emit('toScreen', { hello: data});
	    		socket.emit('chat message', str);
		      // console.log(err);
		      // console.log(reply);
		      // socket.emit('chat message', reply);
	    });


	  socket.on('chat', function (data){
	    console.log("socket connected");
	  });

	});
});


//end of socket code
http.listen(8080, function(){
  console.log('listening on localhost:8080');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/chats', chats);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
