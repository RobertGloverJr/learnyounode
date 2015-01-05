/*
  R.Glover Jan 5, 2015
  name: program7.js
  purpose: implement solution to learnyounode problem 7: "http client"
*/
arg_url_to_get = process.argv[2];
nodejs_http = require('http');
nodejs_http.get(arg_url_to_get, function(response){
  console.log("rdg: got response: " + response.statusCode);
}).on('error', function(err){
   console.log("rdg: Got error: " + err.message);
}).on('end', function(x){
  console.log("rdg: Got end.");
}).on('data', function(dataStream){
  console.log("rdg: got data");
});
