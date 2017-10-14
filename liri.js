var Twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");
var config = require("./keys.js");
console.log(config);

var app = process.argv[2];

switch(app) {

  case "my-tweets":
  tweet();
  break;

  case "spotify-this-song":
  spot();
  break;

  case "movie-this":
  mov();
  break;

  case "do-what-it-says":
  dowhat();
  break;
}

//Twitter

function tweet() {

  var client = new Twitter(config)
  var params = {
    screen_name: 'CNN',
    count: 20
};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {

    if (error) {
        return console.log(error);
      }
    console.log(tweets);
  })
};

//Spotify

// function spot() {

//   var spotifyClient = new SpotifyWebApi({
//     clientId: "d63d45b395e14ece9d8c40e16aec571e"
//     clientSecret: "02feedee9fd94e589f9028cbbdd37fdf"
//   })
  
//   spotifyApi.searchTracks(app)
  
//   .then(function(data) {
//     console.log(data.body);
//   }, function(err) {
//     console.error(err);
//   });
// }