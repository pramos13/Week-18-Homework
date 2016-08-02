//Dependencies
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var sessions = require('sessions');

// Database Configuration
// require mongojs, then save the url of our database 
// name of our collection
var mongojs = require('mongojs');
var databaseUrl = require('breaking-news');
var collections = require('news');

// Use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

// Logs any errors if mongodb has any issues
db.on('error', function(err) {
  console.log('Database Error:', err);
});




