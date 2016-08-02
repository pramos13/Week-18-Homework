//Dependencies
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// Database Configuration
// require mongojs, then save the url of our database 
// name of our collection
var mongojs = require('mongojs');
var databaseUrl = 'breaking-news';
var collections = ['news'];

// Use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

// Logs any errors if mongodb has any issues
db.on('error', function(err) {
  console.log('Database Error:', err);
});













// set app to run at port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!')
});




