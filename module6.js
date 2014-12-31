module.exports = function(fullPathToDir, fileExtension, callBackFunc) {
  var fs = require('fs')
  var path = require('path')
  var filteredList = [];
  var saveErr;

  console.log('fullPathToDir='+fullPathToDir);
  console.log('fileExtension='+fileExtension);


  fs.readdir(fullPathToDir, function (err, list) {
    if (err) {
      console.log('rdg: err='+fullPathToDir);
      return callBackFunc(err);
    }
    list.forEach(function (file) {
      if (path.extname(file) === fileExtension) {
        //filteredList[filteredList.length] = file;
        filteredList.push(file);
        console.log('rdg: file='+file + ' filteredList.length='+filteredList.length );
      }
    });
  });
    console.log('module6:: filteredList='+filteredList);
    console.log('module6::: filteredList.length='+filteredList.length);
    return callBackFunc(null, filteredList);
}
