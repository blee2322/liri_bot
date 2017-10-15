
var fs = require("fs");
var keys = require("./keys.js");
var request = require("request");
// console.log(keys);
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var app = process.argv[2];
var value = process.argv[3];

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
 
    var params = {screen_name:'CNN', count: 20};
    client.get('statuses/user_timeline.json', params, function(error, tweets, response) {
      if (!error) {
          // console.log(tweets);
       for (var i = 0; i < tweets.length; i++) {
          console.log('')
          console.log('-------------------------------------------------------------')
          console.log(" Tweet Number: " + (i + 1))
          console.log('')
          console.log(' Created: ' + tweets[i].created_at)
          console.log('')
          console.log(' Tweet: ' + tweets[i].text)
          console.log('')
          console.log('-------------------------------------------------------------')
          console.log('')
      }
      }else if(error) {
        console.log(error);
      }
    });
}


//Spotify

function spot() {

  var songName = value; 
  var spotify = new Spotify({
    id: "d63d45b395e14ece9d8c40e16aec571e",
    secret: "efd96ed6fa024911848ed0cabffd0f2b"
  });
   
  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    
    for(var i = 0; i < data.tracks.items.length; i++){
        var spotData = data.tracks.items[i];
        //artist
        console.log("Artist: " + spotData.artists[0].name);
        //song name
        console.log("Song: " + spotData.name);
        //spotify preview link
        console.log("Preview: " + spotData.preview_url);
        //album name
        console.log("Album: " + spotData.album.name);
        console.log("-----------------------");
    }
  });
}

function mov() {
  var movieTitle = value;
  request("https://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // console.log(JSON.parse(body));
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMdB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  }
});

}