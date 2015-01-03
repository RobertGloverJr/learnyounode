var myModule6 = require('./module6.js');

var fullPathToDir = process.argv[2];
var fileExtension = process.argv[3];

var myCallbackFunc = function(err, arrayOfFilenames){
  if (err) {
    console.log(err);
    return;
  } else {
    arrayOfFilenames.forEach(function(faVal) {
      console.log(faVal);
      return;
    });
  }
};
myModule6(fullPathToDir, fileExtension, myCallbackFunc);
/*
Here's the official solution in case you want to compare notes:
solution.js:

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
if (err)
return console.error('There was an error:', err)

list.forEach(function (file) {
console.log(file)
})
})

*/
