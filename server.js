//Dependencies
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 3000;

// Database Configuration
// require mongojs, then save the url of our database 
// name of our collection
var mongojs = require('mongojs');
var databaseUrl = 'healthy-news';
var collections = ['news'];

// Use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

var databaseUri = 'mongodb://localhost/week-18-homeworkmongoose';

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
} else {
	mongoose.connect(databaseUri);
}

var db = mongoose.connection;



// Logs any errors if mongodb has any issues
db.on('error', function(err) {
  console.log('Mongoose Error:', err);
});

// Express to handle data parsing
app.use(express.static('app/public/'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));



// Routes
require('./app/routes/data/data.js')(app,db);
require('./app/routes/html/html.js')(app,db);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});




