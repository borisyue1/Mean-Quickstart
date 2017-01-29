var config = require('./config/config'),
    mongoose = require('./config/mongoose'), //creates mongoose db
    express = require('./config/express'),//creates routes and pretty much everything else
    passport = require('./config/passport');//creates passport authentication

//initializing everyting
var db = mongoose(),
    app = express();


app.listen(config.port);

console.log('Server running at http://localhost:' + config.port);