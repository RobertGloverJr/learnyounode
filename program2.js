//
//  R.Glover: Dec 28 2014.  Problem is to add the number pass as arguments.
//
// see:  https://github.com/rvagg/learnyounode/issues/8
//console.log(process.argv);
var iTotWayOne = 0;
process.argv.forEach(function(val, index, array) {
  if (index > 1)  {
    iTotWayOne = Number(iTotWayOne) + Number(val);
  }
});
//console.log(iTotWayOne);

var iTotWayTwo = 0;

process.argv.forEach(function(item) {
  //we need to exclude first and second items
  //so we could just filter them as NAN
  iTotWayTwo += +item ? +item : 0;
});

//console.log(iTotWayTwo);
iAnswer = (iTotWayOne == iTotWayTwo) ? iTotWayOne : '???????';
console.log(iAnswer);
