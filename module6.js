module.exports = function(fullPathToDir, fileExtension, callBackFunc) {
  var fs = require('fs')
  var path = require('path')
  var filteredList = [];

  fs.readdir(fullPathToDir, function (err, list) {
    if (err) {
      callBackFunc(err);
      return;
    }
    list.forEach(function (file) {
      if (path.extname(file) === '.' + fileExtension) {
        filteredList[filteredList.length] = file;
      }
    });
    callBackFunc(null,filteredList);
  });
    return;
}
/*
Here's the official solution in case you want to compare notes:
solution_filter.js:

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

fs.readdir(dir, function (err, list) {
if (err)
return callback(err)

list = list.filter(function (file) {
return path.extname(file) === '.' + filterStr
})

callback(null, list)
})
}

*/
