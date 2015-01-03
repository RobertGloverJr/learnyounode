module.exports = function(fullPathToDir, fileExtension, callBackFunc) {
  console.log('module6:: logic point 1');
  var fs = require('fs')
  var path = require('path')
  var filteredList = [];

  console.log('module6::fullPathToDir='+fullPathToDir);
  console.log('module6::fileExtension='+fileExtension);
  console.log('module6:: logic point 2');

  fs.readdir(fullPathToDir, function (err, list) {
    console.log('module6:: logic point 3');
    if (err) {
      console.log('module6:: logic point 4');
      console.log('module6::: err='+err);
      callBackFunc(err);
      return;
    }
    list.forEach(function (file, fileIndex, fileArray) {
      console.log('\nmodule6:: logic point 5');
      console.log('file='+file);
      console.log('fileIndex='+fileIndex);
      console.log('fileArray.length='+fileArray.length);
      console.log('path.extname(file)='+path.extname(file) );
      if (path.extname(file) === '.' + fileExtension) {
        console.log('module6:: logic point 6');
        filteredList[filteredList.length] = file;
        console.log('module6:: logic point 6X');
      }
    });
    callBackFunc(null,filteredList);
    console.log('module6:: logic point 6XXXXXXXX');
  });
  console.log('module6:: logic point 7');
    console.log('module6:: logic point 8');
    return;
    console.log('module6:: logic point 9');
}
