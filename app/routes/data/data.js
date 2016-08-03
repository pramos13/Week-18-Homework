// Database configuration
var mongojs = require('mongojs');
var databaseUrl = "healthy-news";
var collections = ["news"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});

// Require request and cheerio
var request = require('request');
var cheerio = require('cheerio');


var path = require('path');

module.exports = function(app, db){

	app.get('/scrape', function(req, res){

		request('http://www.wesh.com/sports', function(err, res, body){
			
			var $ = cheerio.load(body);

			// // an empty array to save our scraped data
			// var result = [];

			var title = $('a.trb_outfit_primaryItem_article_title_a').slice(0).eq(0).text();
			var link = 'http://www.wesh.com/' + $('a.trb_outfit_primaryItem_article_title_a').attr('href');
			
			console.log(title);
			console.log(link);

			db.news.insert({
				title: title,
				link: link,
				comments: []
			});
		});	
		
		res.json('reload');
	});

	app.get('/getData', function(req, res){

		// pulls data from database and uses it.
		db.news.find({}, function(err, docs){
			res.json(docs);
		})


	});

};
