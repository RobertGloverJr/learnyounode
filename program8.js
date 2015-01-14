/*
 R.Glover Jan 13, 2015
 program8.js intends to solve: HTTP COLLECT Exercise 8 of 13

 Write a program that performs an HTTP GET request to a URL provided to you
 as the first command-line argument. Collect all data from the server (not
 just the first "data" event) and then write two lines to the console (stdout).

 The first line you write should just be an integer representing the number
 of characters received from the server and the second line should contain
 the complete String of characters sent by the server.

*/
var urlToGet = process.argv[2];
console.log("urlToGet: "+urlToGet);

var http = require('http');

var request = http.request(urlToGet, function(response){
  var totDataLength = 0;
  console.log('rdg: status: ' + response.statusCode);
  console.log('logic point 51');
  response.setEncoding('utf8');
  response.on('data', function(dataChunk){
    console.log('logic point 52. dataChunk.length: '+ dataChunk.length);
    totDataLength = totDataLength + dataChunk.length;
  });
  response.on('end', function(){
    console.log('logic point 53');
    console.log('totDataLength: '+ totDataLength);
  });

});
console.log("logic point 2");
request.on('error', function(error){
  console.log('logic point 3. error.message: '+ error.message);
});
console.log("logic point 4");
request.end();
console.log("logic point 5");
