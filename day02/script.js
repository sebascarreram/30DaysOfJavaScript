/* 
		Primitive data types are immutable(non-modifiable) data types.
		Once a primitive data type is created we cannot modify it.
*/
let word = "JavaScript";

word[0] = "Y";

console.log(word);
console.log("Do NOT modify");
console.log("----------");
/*  
		If we try to modify the string stored in variable word, JavaScript should
 		raise an error. 
 		Any data type under a single quote, double quote, or backtick quote is a 
		string data type.

		This expression does not change the string stored in the variable word.
		So, we can say that strings are not modifiable or in other words immutable.
		Primitive data types are COMPARED by its value.
*/

let num1 = 3;
let num2 = 3;
console.log(num1 + " == " + num2);
console.log(num1 == num2); // True because thye are same numbers.
console.log("----------");
let js = "JavaScript";
let py = "Python";
console.log(js + " == " + py);
console.log(js == py); // False because they are NOT same string.
console.log("----------");
let ligthOn = true;
let ligthOff = false;
console.log(ligthOn + " == " + ligthOff);
console.log(ligthOn == ligthOff); // False because they are not same

// #####
// Non-Primitive Data Types

// Non-primitive data types are modifiable or mutable
//

console.log("----------");
let numbers = [1, 2, 3];

console.log("Before modify");
console.log(numbers);
console.log("After modified");
numbers[0] = 10;
console.log(numbers);

// An array, which is a NON-PRIMITIVE data type is mutable.
// NON-Primitive types CANNOT be compared by value.

let numbOne = [1, 2, 3];
let numbTwo = [1, 2, 3];
console.log(numbOne == numbTwo); // false because two arrays are compared and do NOT

let userOne = {
	name: "Sebastian",
	lastName: "Carrera",
	age: 26
};
let userTwo = {
	name: "Sebastian",
	lastName: "Carrera",
	age: 26
};
console.log(userOne == userTwo); // false because two objects are compared and do NOT

console.log("----------");
// Tip: Rule of thumb, we cannot compare non-primitive data types.
// 			DON'T compared arrays, objects and functions.

// TWO objects are only strictly equal if they refer to the same underlying object.
let nums = [1, 2, 3];
let numbersNew = nums;
console.log(nums);
console.log(numbersNew);
console.log(nums == numbersNew); // true because they are same array.
