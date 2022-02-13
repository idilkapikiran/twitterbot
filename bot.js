var Twit= require('twit')

var config = require('./config');

var T = new Twit(config);
//the tweet to be send
var params={
	status:'test tweet'
}

tweetInterval();

//call sendTweet every hour
setInterval(tweetInterval, 1000 * 60);

function tweetInterval(){
	var tweet = {
		status:'whatchu want';
	}
	T.post('statuses/update', params, tweeted);
	function tweeted(err, data, response) {
		if(err){
			console.log("something) went wrong")

		}else{
			console.log("tweeted");
		}		
	}
}

//get example

// var params={
// 	q: 'rainbow since:2020-08-17',
// 	count: 10
// }

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
// 	var tweets= data.statuses;
// 	for(var i =0;i < tweets.length; i++){
// 		console.log(tweets[i].text);
// 	}
// }
