/*
FILTERED LS
Exercise 5 of 13

Create a program that prints a list of files
 in a given directory, filtered by the
 extension of the files. You will be provided
  a directory name as the first argument
  to your program (e.g. '/path/to/dir/')
  and a file extension to filter by as
  the second argument.

*/
//http://nodejs.org/api/process.html#process_process_argv
var fullPathToDir = process.argv[2];
var fileExtension = "." + process.argv[3];
var debugYN = process.argv[4];
if ('Y'==debugYN) console.log("fullPathToDir="+fullPathToDir);
if ('Y'==debugYN) console.log("fileExtension="+fileExtension);

var fs = require('fs');
var nobjPath = require('path');
fs.readdir(fullPathToDir, function(faErr, faFiles) {
  if ('Y'==debugYN) console.log("\n"+faFiles);
  faFiles.forEach(function(faVal, faIndex, faArray){
    if ('Y'==debugYN) console.log("\nval="+faVal);
    if ('Y'==debugYN) console.log("Index"+faIndex);
    //if ('Y'==debugYN) console.log("array"+faArray);
    var iIdx = faVal.lastIndexOf(fileExtension);
    if ( (iIdx>-1) && (fileExtension===nobjPath.extname(faVal)) ) {
      if ('Y'==debugYN) console.log("iIdx"+ iIdx);
      console.log(faVal);
    }
  });
});
/*
Here's the official solution in case you want to compare notes:

  var fs = require('fs')
  var path = require('path')

  fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
      })
    })
*/
