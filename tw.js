var Twitter = require('twitter-js-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "fd8DxxGcXhwB08ca5KIzBpezV",
    "consumerSecret": "h7dRPR0wIsMx5X4soew2wJKazPtTFkxUrTvUj8b5PEWMJ58KUK",
    "accessToken": "287242565-7sFb5T14PApzqC4nh8165mAjMny1hamB14ZctBxx",
    "accessTokenSecret": "LZeJDzIU1RBzEH2g0FeHqz9Zl7ddlZ4drRQdtroWTBrqO",
    // "callBackUrl": "XXX"
}

var twitter = new Twitter(config);

var error = function (err, response, body) {
  console.log('ERROR [%s]', response, err);
};

//Example calls

// function(data) {
//   var tweets = JSON.parse(data)
//   tweets.forEach(function(el, i) {
//     console.log(el.text)
//   })
// }

var getFollowers = function(cursor) {
  params = { screen_name: 'paul_irish' }
  params.cursor = cursor

  twitter.getFollowersList(params, error, function(data) {
    var items = JSON.parse(data)
    items.users.forEach(function(el, i) {
      console.log(el.screen_name)

      // twitter.getUserTimeline({ screen_name: el.screen_name, count: '10'}, error, function(data) {
      //   var tweets = JSON.parse(data)
      //   tweet.forEach(function(el, i) {
      //     console.log(el)
      //   })
      // });
    })

    getFollowers(items.next_cursor)
  });
}

getFollowers()


// twitter.getMentionsTimeline({ count: '10'}, error, success);

// twitter.getHomeTimeline({ count: '10'}, error, success);

// twitter.getReTweetsOfMe({ count: '10'}, error, success);

// twitter.getTweet({ id: '1111111111'}, error, success);


// //
// // Get 10 tweets containing the hashtag haiku
// //

// twitter.getSearch({'q':'#haiku','count': 10}, error, success);
