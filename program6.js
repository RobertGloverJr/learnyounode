console.log('program6:: logic point 1');
var myModule6 = require('./module6.js');

console.log('program6:: logic point 2');
var fullPathToDir = process.argv[2];

console.log('program6:: logic point 3');
var fileExtension = process.argv[3];

console.log('program6:: logic point 4');
var myCallbackFunc = function(err, arrayOfFilenames){
  console.log('program6:: logic point 5');
  if (err) {
    console.log('program6:: logic point 6');
    console.log(err);
    return;
  } else {
    console.log('program6:: logic point 7');
    arrayOfFilenames.forEach(function(faVal, faIndex, faArray) {
      console.log('program6:: logic point 8');
      console.log('rdg(forEach faVal): '+faVal);
      console.log('rdg(forEach faIndex): '+faIndex);
      console.log('rdg(forEach faArray): '+faArray);
      console.log('rdg(forEach faArray.length): '+faArray.length);
      console.log('\n');
      return;
    });
  }
  console.log('program6:: logic point 9');
};
console.log('program6:: logic point 10');
myModule6(fullPathToDir, fileExtension, myCallbackFunc);

console.log('program6:: logic point 11');
