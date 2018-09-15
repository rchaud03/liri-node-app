var fs = require("fs");

// var dotenv = require(dotenv).config();

var spotKeys = require("./keys.js");

var searchType = process.argv[2];
var searchItem = process.argv[3];


// var spotify = new Spotify(keys.spotify);


switch (searchType) {
	case 'concert-this':
		console.log(searchType + ": " + searchItem);
	break;

	case 'spotify-this-song':
	        console.log(searchType + ": " + searchItem);
	break;

	case 'movie-this':
	        console.log(searchType + ": " + searchItem);
	break;

	default: 
	console.log("unknown search type. Please specify using 'concert-this', 'movie-this' or 'spotify-this-song'. ");
};
