//requires module fs
var fs = require('fs');

//Reads the file, converts to string, splits every end of line
var numOfLines = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;

//displays number of lines
console.log(numOfLines);
