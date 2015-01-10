/*
  R.Glover Jan 5, 2015
  name: program7.js
  purpose: implement solution to learnyounode problem 7: "http client"
*/
arg_url_to_get = process.argv[2];
nodejs_http = require('http');
nodejs_http.get(arg_url_to_get, function(response){
  console.log("rdg: got a response: " + response.statusCode);
  console.log("rdg: response.httpVersion: " + response.httpVersion);
  response.setEncoding("utf8");
  response.on("data", function (theData){
    console.log("typeof data: " + typeof data);
    console.log("got data!!!!-->" + theData);
  });
});
