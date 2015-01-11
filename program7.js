/*
  R.Glover Jan 5, 2015
  name: program7.js
  purpose: implement solution to learnyounode problem 7: "http client"

  Submission results match expected  (Sun, Jan 11, 2015 09:51am)
  PASS
  Your solution to HTTP CLIENT passed!

*/
arg_url_to_get = process.argv[2];
nodejs_http = require('http');
nodejs_http.get(arg_url_to_get, function(response){
  //console.log("rdg: got a response: " + response.statusCode);
  //console.log("rdg: response.httpVersion: " + response.httpVersion);
  response.setEncoding("utf8");
  response.on("data", function (theData){
    var dataArray = theData.split("\n");
    //console.log("\ndataArray.length-->" + dataArray.length);
    dataArray.forEach(function (oneSlot, idx) {
      console.log(oneSlot);
    });
  });
});
/*

Here's the official solution in case you want to compare notes:

var http = require('http')

http.get(process.argv[2], function (response) {
response.setEncoding('utf8')
response.on('data', console.log)
response.on('error', console.error)
})


*/
