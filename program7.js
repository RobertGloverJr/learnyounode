/*
  R.Glover Jan 5, 2015
  name: program7.js
  purpose: implement solution to learnyounode problem 7: "http client"
*/
arg_url_to_get = process.argv[2];
nodejs_http = require('http');
httpResponse = nodejs_http.get(arg_url_to_get, function(response){
  console.log("rdg: got response: " + response.statusCode);
});
console.log("httpResponse.statusCode: "+httpResponse.statusCode);
