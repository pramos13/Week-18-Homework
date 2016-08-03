$(document).ready(function () {
	
	var currentUrl = window.location.origin;

	$.ajax({url: currentUrl + '/getData', method: 'GET'}).done(function(response){

		console.log(response);

	});



});