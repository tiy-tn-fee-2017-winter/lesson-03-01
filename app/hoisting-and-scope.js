

// THIS IS HOISTING!!!
console.log(x);
console.log(y);
// console.log(z); // This would error

var x = 'Hey';
var y;

console.log(x); // "Hey"

// REMINDER!!! DEFINE WHAT CLOSURES ARE!!!
// Any function that limits the scope of a newly declared variable

var z = function () {
  let x = 2;

  x = 2;
}
