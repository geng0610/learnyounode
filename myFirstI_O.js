/*var fs = require('fs');
var input = process.argv[2];
var str=fs.readFileSync(input).toString();
console.log(str.split('\n').length-1);*/

var fs = require('fs');
var input = process.argv[2];

fs.readFile(input, function finishedReading(error, data) {
  if (error) {return console.error(error);}
  console.log(data.toString().split('\n').length-1);
})