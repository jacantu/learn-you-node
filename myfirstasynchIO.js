//requires module fs
var fs = require('fs');
//stores the file in a variable
var file = process.argv[2];

//Method reads the file, converts to string, splits every end of line
fs.readFile(file, function (err, data){

  if (err){
    return console.log(err);
  }

  // fs.readFile(file, 'utf8', callback) can also be used
  var numOfLines = data.toString().split('\n').length - 1;

  //displays number of lines
  console.log(numOfLines);

});
