//var dotenv = require("dotenv").config();
//var donenv2 = require("dotenv").config();
//require("dotenv").config();
//require('dotenv').config();

var fs = require("fs");
var req = require("request");

//var spotKeys = require("./keys.js");

var searchType = process.argv[2];
var searchItem = process.argv[3];

//var spotify = new Spotify(keys.spotify);


switch (searchType) {
	case 'concert-this':
		console.log(searchType + ": " + searchItem);
		concert(searchItem);
	break;

	case 'spotify-this-song':
            console.log(searchType + ": " + searchItem);
            spotify(searchItem);
	break;

	case 'movie-this':
		console.log(searchType + ": " + searchItem);
		movie();
	break;

	default: 
	console.log("unknown search type. Please specify using 'concert-this', 'movie-this' or 'spotify-this-song'. ");
};

function concert () {
	var concertUrl = "https://rest.bandsintown.com/artists/" + searchItem + "/events?app_id=codingbootcamp";
	req(concertUrl, function (error, response, body) {
		var data = JSON.parse(body);
		if (!error && response.statusCode === 200) {

			console.log("\n" + "Venue: " + data[0].venue.name + "\n" +
			            "City: " + data[0].venue.city + ", " + data[0].venue.region + "\n" +
			            "Country: " + data[0].venue.country + "\n" +
                        "Date and Time: " + data[0].datetime + "\n" +
                        "--------------------------------------------------------------" + "\n");
		}
	})
	
};

function movie () {
	var movieUrl = "https://www.omdbapi.com/?apikey=47a2577f&t=" + searchItem;
	// if (searchItem = null) {
	// 	console.log("You didn type a movie name");

	// } else { 
	// 	moviesearch(searchItem);

	// }
	// function moviesearch () { 
		req(movieUrl, function (error, response, body) {
		var data = JSON.parse(body);
		if (!error && response.statusCode === 200) {
			console.log(movieUrl + "\n");
			console.log("Your search results:" + "\n" +
					"\n" +
					"Title: " + data.Title + "\n" +
					"Year: " + data.Year + "\n" +
					"IMDB rating: " + data.Ratings[0].Value + "\n" +
					"Rotten Tomatoes rating: " + data.Ratings[0].Value +"\n" +
					"Languages: " + data.Language + "\n" +
					"Plot: " + data.Plot + "\n" +
                    "Cast: " + data.Actors + "\n" +
                    "--------------------------------------------------------------" + "\n");
		}
	})
//}
}

function spotify () {
}
