var Twit= require('twit')

var config = require('./config');

var T = new Twit(config);
//the tweet to be send
// var params={
// 	status:'test tweet'
// }
var fs = require('fs'); 
var cmd = "processing-java --sketch=`pwd`/rainbow --run"
var exec = require('child_process').exec;
exec(cmd, processing);
function processing(){
	var filename='rainbow/output.png';
	var params={
	encoding: 'base64'
}
	var b64content = fs.readFileSync(filename, params);
	T.post('media/upload', {media_data: b64content}, uploaded);
	function uploaded(err, data, response){
	var id=data.media_id_string;
	var tweet = {
		status: 'test tweet',
		media_ids:[id]
	}
T.post('statuses/update', tweet, tweeted)
}
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

//GET EXAMPLE
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
