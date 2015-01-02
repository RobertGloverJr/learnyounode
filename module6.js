module.exports = function(fullPathToDir, fileExtension, callBackFunc) {
  console.log('module6:: logic point 1');
  var fs = require('fs')
  var path = require('path')
  var filteredList = [];
  var saveErr;

  console.log('module6::fullPathToDir='+fullPathToDir);
  console.log('module6::fileExtension='+fileExtension);
  console.log('module6:: logic point 2');

  fs.readdir('/Users/rdg/Documents/rdgdev/NodeJs/NodeSchool/learnyounode', function (err, list) {
    console.log('module6:: logic point 3');
    if (err) {
      console.log('module6:: logic point 4');
      console.log('module6::: err='+fullPathToDir);
      return callBackFunc(err);
    }
    list.forEach(function (file) {
      console.log('module6:: logic point 5');
      if (path.extname(file) === fileExtension) {
        console.log('module6:: logic point 6');
        //filteredList[filteredList.length] = file;
        filteredList.push(file);
        console.log('module6:: file='+file + ' filteredList.length='+filteredList.length );
      }
    });
  });
  console.log('module6:: logic point 7');
    console.log('module6:: filteredList='+filteredList);
    console.log('module6::: filteredList.length='+filteredList.length);
    console.log('module6:: logic point 8');
    return callBackFunc(null, filteredList);
    console.log('module6:: logic point 9');
}
