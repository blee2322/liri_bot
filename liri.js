
var fs = require("fs");
var keys = require("./keys.js");
// console.log(keys);
var Twitter = require("twitter");

var app = process.argv[2];
var value = process.argv[3];

switch(app) {

  case "my-tweets":
  tweet();
  break;

  // case "spotify-this-song":
  // spot();
  // break;

  // case "movie-this":
  // mov();
  // break;

  // case "do-what-it-says":
  // dowhat();
  // break;
}

//Twitter

function tweet() {

    var client = new Twitter({
      consumer_key: 'NDrNnJBlpm7JmT2OgUu26iTI8',
      consumer_secret: 'h266D7nolgyQlTrni2Axvj8cf6GMNLhdP5iB2Sh7KmqR4yc5DI',
      access_token_key: '2997185076-JV7w0PEKB033UXcxWm6RetFrS6NFK71awty9pId',
      access_token_secret: 'bqi5pdOkRGjiYD6yLV0fIHWMoQcjYCJSrinp9AOSqe2u9'
    });
    // console.log(client);
 
    var params = {screen_name:'wi', count: 20};
    client.get('statuses/user_timeline.json', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }else if(error)
        console.log(error);
    });
}

//   var Twitter = require("twitter");
//   var config = require("./keys.js").twitterKeys;
//   var client = new Twitter(config)
//   var params = {
//     screen_name: 'CNN',
//     count: 20
//   };
//   console.log(params);
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {

//     if (error) {
//         return console.log(error);
//       }
//     console.log(tweets, response);
//   })
// };

//Spotify

// function spot() {

//   var spotify = require("node-spotify-api");
//   var spotifyClient = new spotify({
//     clientId: "d63d45b395e14ece9d8c40e16aec571e",
//     clientSecret: "02feedee9fd94e589f9028cbbdd37fdf"
//   });

//   spotifyApi.searchTracks( value, function(err, data) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.log(value);
// };

// function mov() {

//   var request = require("request");
//   var movieTitle = value;

//   request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log(body);
//   }
// }