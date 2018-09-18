require('dotenv').config();
var fs = require("fs");
var req = require("request");
var Spotify = require('node-spotify-api');

var keys = require('./keys.js');

var searchType = process.argv[2];
var searchItem = process.argv.slice(3).join(" ");
// var searchItem = process.argv[3];

var spotify = new Spotify(keys.spotify);


switch (searchType) {
	case 'concert-this':
		console.log(searchType + ": " + searchItem);
		concert(searchItem);
	break;

	case 'spotify-this-song':
            console.log(searchType + ": " + searchItem);
			// spotifying(searchItem);
			spotifyingtwo();
	break;

	case 'movie-this':
		console.log(searchType + ": " + searchItem);
        movie();
	break;

	default: 
	console.log("unknown search type. Please specify using 'concert-this', 'movie-this' or 'spotify-this-song'. ");
};

//Concert search
function concert () {
	var concertUrl = "https://rest.bandsintown.com/artists/" + searchItem + "/events?app_id=codingbootcamp";
	req(concertUrl, function (error, response, body) {
        var data = JSON.parse(body);
        var moment = require("moment");
		if (!error && response.statusCode === 200) {
			data.forEach(function(tourStop) {
                var timeDate = moment(tourStop.datetime).format("MM/DD/YYYY");
                
                // console.log("\n" + "Date and Time: " + tourStop.datetime + "\n" +
                console.log("\n" + "Date : " + timeDate + "\n" +
                "Venue: " + tourStop.venue.name + "\n" +
				"City: " + tourStop.venue.city + ", " + tourStop.venue.region + "\n" +
				"Country: " + tourStop.venue.country + "\n" +
				"-----------------------");

			})
		}
	})
	
};



//Movie Search
function movie () {
	var movieUrl = "https://www.omdbapi.com/?apikey=47a2577f&t=" + searchItem;

		req(movieUrl, function (error, response, body) {
   
		var data = JSON.parse(body);
		if (!error && response.statusCode === 200) {
			console.log(movieUrl + "\n");
			console.log("Your search results:" + "\n" +
					"\n" +
					"Title: " + data.Title + "\n" +
					"Year: " + data.Year + "\n" +
					"RATINGS: IMDB = " + data.Ratings[0].Value +" " + "Rotten Tomatoes = " + data.Ratings[0].Value +"\n" +
					"Languages: " + data.Language + "\n" +
					"Cast: " + data.Actors + "\n" +
					"Plot: " + data.Plot + "\n" +
					"Country: " + data.Country +"\n" +
                    "--------------------------------------------" + "\n");
        }

    })
}


//Song Search

function spotifyingtwo () {  
		spotify.search({ type: 'track', query: searchItem }, function(err, data) {
		// var spotifyData = JSON.parse(data);
		// if (!err && response.statusCode === 200) {

		if (err) {
		  return console.log('Error occurred: ' + err);
        }
        // data.forEach(function (song) {
        //     song.
        // })
	   
	  console.log(data); 
	  console.log("-------------------------------");
	  console.log(spotifyData);
		//}
	  });
	}