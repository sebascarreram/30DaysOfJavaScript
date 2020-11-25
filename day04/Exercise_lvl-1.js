console.log("~~~~~~~~~~~~~~~~");
// Question 1
// Get user input using prompt("Enter your age:").
// If user is 18 or older , give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of
// years he neds to turn 18.
//
const yourAge = prompt("Enter your age");

console.log(`Your age: ${yourAge}`);

if (yourAge >= 18) {
	console.log("You are old enough to drive.");
} else {
	console.log(`You are left with ${18 - yourAge} years to drive`);
}

console.log("~~~~~~~~~~~~~~~~");
// Question 2
// Compare the values of myAge and yourAge using if...else. Based on the
// comparison and log the result to console stating who is older (me or you).
// Use prompt("Enter your age:") to get the age as input.
//
const myAge = 26;

console.log(`Your age: ${yourAge}`);
console.log(`My age: ${myAge}`);

if (myAge > yourAge) {
	console.log(`I am ${myAge - yourAge} older than you`);
} else {
	console.log(`You are ${yourAge - myAge} older than me`);
}

console.log("~~~~~~~~~~~~~~~~");
// Question 3
// If a is greater than b return 'a is greater than b' else 'a is less than b'.
// Try to implement it in to ways
//
let a = 4;
let b = 1;

console.log(
	`${a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`}`
);

console.log("~~~~~~~~~~~~~~~~");
// Question 4
// Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?
//
const nbr = 9;

if (nbr % 2 === 0) {
	console.log(`${nbr} is an even number`);
} else {
	console.log(`${nbr} is is an odd number`);
}
