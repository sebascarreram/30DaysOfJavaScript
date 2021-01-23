// Question 1
// Check the speed difference among the following loops: while, for, for of, forEach
//
console.time("While loop");
let a = 0;
while (a  < 10){
	console.log(a)
	a++;
}
console.timeEnd("While loop");

console.time("for loop");
for (let a = 0; a < 10; a++){
	console.log(a)
}
console.timeEnd("for loop");

console.time("for OF");
const ab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let a of ab){
	console.log(a)
}
console.timeEnd("for OF");

console.time("forEach")
const ac = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ac.forEach(el => console.log(el))
console.timeEnd("forEach")

// The regular for loop is slower than FOR OF or forEach loop.
