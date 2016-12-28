//routes
var express = require('express');
var router = express.Router();
var Student = require('../models/chat');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Chat endpoint');
  Chat.find({}, function(err, documents) {
  	if(err){
  		res.json('Nothing in chat space');
  	} else {
  		res.json(documents);
  	}
  });
});

//FIX!!
router.post('/', function(req, res, next) {
	let data = req.body;
	console.log(data);
	let newMessage = data.message;

	newMessage.save(function(err){
		if(err) {
			console.log(err);
			res.json('Couldn\'t add message');
		} else {
			res.json('Added the message');
		}
	});
	res.json('Adding messages');

});

// router.post('/delete/:id', function(req, res, next){
// 	res.json('This is for deleting a message');
// });

module.exports = router;