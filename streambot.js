var Twit= require('twit')
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg){
	console.log("Someone followed!");
	var name = eventMsg.source.name;
	var username = eventMsg.source.screen_name;
	tweetIt('.@' + username + 'welcome to frög prison SHEEESH');
}

function tweetIt(txt){
	var tweet = {
		status: txt;
	}
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err){
			console.log("something) went wrong")

		}else{
			console.log("tweeted");
		}	
	}
}