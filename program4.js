var fileToRead = process.argv[2];
//console.log('fileToRead: ' + fileToRead);
var fs = require('fs');
fs.readFile(fileToRead,'utf8', function(err, strData) {
  if (err) throw err;
  console.log(strData.split('\n').length-1);
});
/*
Here's the official solution in case you want to compare notes:

  var fs = require('fs')
  var file = process.argv[2]

  fs.readFile(file, function (err, contents) {
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
  })
*/
