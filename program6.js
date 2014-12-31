var myModule6 = require('./module6.js');
var fullPathToDir = process.argv[2];
var fileExtension = "." + process.argv[3];
var myCallbackFunc = function(err, arrayOfFilenames){
  console.log("rdg: enterred myCallbackFunc");
  if (err) {
    console.log('rdg: detected err');
    console.log(err);
  } else {
    console.log('rdg: else');
    arrayOfFilenames.forEach(function(faVal, faIndex, faArray) {
      console.log(faVal);
    });
  }
  console.log('rdg: exiting myCallbackFunc');
};
myModule6(fullPathToDir, fileExtension, myCallbackFunc);
