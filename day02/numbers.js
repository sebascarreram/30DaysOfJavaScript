// Numbers are integers and decimal values which can do all the arithmetic operations.

// Math Object
console.log("PI");
const PI = Math.PI;
console.log(PI);
console.log("-------");
console.log(Math.round(PI));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));

// min and max
console.log(Math.min(-5, 3, 3, 2, 4, 19));
console.log(Math.max(-5, 3, 3, 2, 4, 19));

// Random numbers
const randRandom = Math.random(); // Create random number between 0 to 0.99999
console.log(randRandom);
console.log("-------");
// Let us  create random number between 0 to 10
const num = Math.random() * 10; // create random between 0 and 10
console.log(num);
console.log(Math.floor(num));

//Absolute value
console.log(Math.abs(-10)); // 10

// Square root
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 3^2 = 9
console.log(Math.E);

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
//
console.log(Math.log(2));
console.log(Math.log(10));
