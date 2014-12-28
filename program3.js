var filePath;
process.argv.forEach(function(val, index, array) {
  if (2==index) {
    filePath = val;
  };
  //console.log(index + ': ' + val);
});
var fs = require('fs');
var buf = fs.readFileSync(filePath);
var str =  buf.toString();
var arr = str.split('\n');
var iNbrNewLines = -1 + arr.length;
console.log(iNbrNewLines);
//
//Here's the official solution in case you want to compare notes:
//var fs = require('fs')
//
//var contents = fs.readFileSync(process.argv[2])
//var lines = contents.toString().split('\n').length - 1
//console.log(lines)
//
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
