//connecting to mongoose and returning the database
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
	mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');//gets the user model
	require('./passport')();
    return db;
};