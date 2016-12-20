//models
const mongoose = require('mongoose');

let chatSchema = mongoose.Schema({
	message: String

});

let Chat = mongoose.model('message', chatSchema);

module.exports = Chat;