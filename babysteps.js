//gets input from terminal
var inputs = process.argv
var sum = 0;

//Loops through array starts at index 2
for (var i=2; i < inputs.length; i++){
  sum = +inputs[i] + sum;
}

console.log(sum);
