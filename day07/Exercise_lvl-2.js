console.log("~~~~~~~~~~~~~");
// Question 1
// Linear equation is calculated as follows: ax + by + c = 0.
// Write a function which calculates value of a linear equation, solveLinEquation.
//

const solveLinEquation = (a, b, c) => {
	// missing here
};
console.log(solveLinEquation(1, 2, 3));
console.log("~~~~~~~~~~~~~");
// Question 2
// Quadratic equation is calculated as follows: ax2 + bx + c = 0.
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
//
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//
const solveQuadEquation = (...args) => {
	// ...args -> [x,x,x];
	if (args.length !== 0) {
		//
		// args[0] -> a
		// args[1] -> b
		// args[2] -> c
		//
		const a = args[0];
		const b = args[1];
		const c = args[2];
		//
		// a^2
		const number1 = Math.pow(a, 2);
		// +(-b) or +b
		const number2 = +b;
		// +(-b) or +b
		const number3 = +c;

		// b^2 - 4ac
		const b2 = Math.pow(number2, 2);
		// 4ac
		const ac = 4 * number1 * number3;
		// total b^2 - 4ac
		const d = b2 - ac;

		// Negative to positive
		const toInte = Math.abs(d);

		// −b ± sqrt(x) / 2a

		// b
		// -(-number2) or -(number2) 
		const preB = -number2;

		// square root of x
		// Math.sqrt(x)
		const sRoot = Math.sqrt(toInte);

		const preA = 2 * number1;

		
		const div1 = preB / preA;
		const div2 = sRoot / preA;

		const totalA = div1 - div2;
		const totalB = div1 + div2;

		if (totalA === totalB) {
			return `{${totalA}}`;
		} else {
			return `{${totalB}, ${totalA}}`;
		}
	} else {
		return "{0}";
	}
};

console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 0, 4));
console.log(solveQuadEquation(1, -1, 0));
console.log("~~~~~~~~~~~~~");
// Question 3
// Declare a function name printArray.
// It takes array as a parameter and it prints out each value of the array.
//
const printArray = arr => {
	for (const elem of arr) {
		console.log(elem);
	}
};
console.log("Print out each value of the Array:");
// Array
const ar = ["Sebas", "Carrera", "Medina"];
// Print array original
console.log(ar);
console.log("~");
// Print each value of the array
printArray(ar);
console.log("~~~~~~~~~~~~~");
// Question 4
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
//
// showDateTime()
// 08/01/2020 04:08
//
const showDateTime = () => {
	const date = new Date();

	// Date
	const nowYear = date.getFullYear(); // yyyy
	const nowMonth = date.getMonth() + 1; // 0-11
	const nowDay = date.getDate(); //1-31

	const allDate = `${nowDay}/${nowMonth}/${nowYear}`;

	// Time
	const nowHours = date.getHours(); //0-23
	const nowMins = date.getMinutes(); //0-59

	let hoursForm;
	let minutesForm;

	if (nowHours < 10 && nowMins < 10) {
		// Hours
		hoursForm = `0${nowHours}`;
		// Minutes
		minutesForm = `0${nowMins}`;
	} else {
		// Hours
		hoursForm = nowHours;
		// Minutes
		minutesForm = nowMins;
	}

	const allTimes = `${hoursForm}:${minutesForm}`;

	console.log(`${allDate} ${allTimes}`);
};

showDateTime();

console.log("~~~~~~~~~~~~~");
// Question 5
// Declare a function name swapValues. This function swaps value of x to y.
//
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
//
const swapValues = (x, y) => {
	let ele;

	// x -> ele
	ele = x;
	// x -> y
	x = y;
	// ele -> y
	y = ele;

	console.log(`x => ${x}, y => ${y}`);
};
console.log("Original 3, 4");
swapValues(3, 4);
console.log("~");
console.log("Original 5, 4");
swapValues(5, 4);

console.log("~~~~~~~~~~~~~");
// Question 6
// Declare a function name reverseArray.
// It takes array as a parameter and it returns the reverse of the array (don't use method).
//
// console.log(reverseArray([1, 2, 3, 4, 5]))
// [5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// ['C', 'B', 'A']
//
const reverseArray = arr => {
	// new array
	let arrayReverse = [];

	// 0 to length - 1
	for (let a = arr.length - 1; 0 <= a; a--) {
		// to push to new array
		arrayReverse.push(arr[a]);
	}
	return arrayReverse;
};

console.log("Original Array:");
console.log([1, 2, 3, 4, 5]);
console.log("Reverse of the array");
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log("~");
console.log("Original Array:");
console.log(["A", "B", "C"]);
console.log("Reverse of the array");
console.log(reverseArray(["A", "B", "C"]));

console.log("~~~~~~~~~~~~~");
// Question 7
// Declare a function name capitalizeArray.
// It takes array as a parameter and it returns the - capitalizedarray.
//
const capitalizeArray = arr => {
	// Length of the array
	const arrLen = arr.length;
	// New array
	let arrNew = [];
	// for loop
	// 0 to length
	for (let a = 0; a < arrLen; a++) {
		// Convert all to UpperCase
		let toUpper = arr[a].toUpperCase();
		// To push to New array
		arrNew.push(toUpper);
	}
	return arrNew;
};
console.log(capitalizeArray(["sebastian", "jeannie"]));
console.log("~~~~~~~~~~~~~");
// Question 8
// Declare a function name addItem.
// It takes an item parameter and it returns an array after adding the item
//

// Array Original
let arrayOriginal = ["Sebastian", "Carrera"];
console.log(arrayOriginal);

const addItem = name => {
	// push() is adding an item in the end of the array
	// or unshif() is adding an in the beginning of the array too
	arrayOriginal.push(name);
	return arrayOriginal;
};

// Add an item to array
console.log(addItem("Medina"));

console.log("~~~~~~~~~~~~~");
// Question 9
// Declare a function name removeItem.
// It takes an index parameter and it returns an array after removing an item
//
const removeItem = index => {
	// Check it if index parameter find in array position of array to remove an item in array
	if (index < arrayOriginal.length) {
		// splice has two paremeters:
		// The first parameter defines the position
		// The second parameter defines how MANY elements should be removed
		// or other two methods can remove too
		// - shift() removing an item in the beginning of the array
		// - pop() removing an item in the end of the array
		arrayOriginal.splice(index, 1);
		return arrayOriginal;
	} else {
		// if index parameter is not find
		return `Try these numbers [0 - ${
			arrayOriginal.length - 1
		}]. Please, try late again`;
	}
};
console.log(removeItem(1));
console.log("~~~~~~~~~~~~~");
// Question 10
// Declare a function name sumOfNumbers.
// It takes a number parameter and it adds all the numbers in that range.
//
const sumOfNumbers = number => {
	let sum = 0;
	for (let a = 0; a < number; a++) {
		console.log(`${a} -> ${(sum += number)}`);
		//sum += number;
	}
	return `All the numbers -> ${sum}`;
};

console.log(sumOfNumbers(5));
console.log("~~~~~~~~~~~~~");
// Question 11
// Declare a function name sumOfOdds.
// It takes a number parameter and it adds all the odd numbers in that - range.
//
const sumOfOdds = number => {
	let sum = 0;
	for (let a = 0; a < number; a++) {
		if (a % 2 === 1) {
			console.log(`${a} -> ${(sum += a)}`);
		}
	}
};
console.log("Only odd numbers and all the odds numbers sum");
sumOfOdds(20);
console.log("~~~~~~~~~~~~~");
// Question 12
// Declare a function name sumOfEven.
// It takes a number parameter and it adds all the even numbers in that - range.
//
const sumOfEven = number => {
	let sum = 0;
	for (let a = 0; a < number; a++) {
		if (a % 2 === 0) {
			console.log(`${a} -> ${(sum += a)}`);
		}
	}
};
console.log("Only Even numbers and all the odds numbers sum");
sumOfEven(20);
console.log("~~~~~~~~~~~~~");
// Question 13
// Declare a function name evensAndOdds.
// It takes a positive integer as parameter and it counts number of evens and odds in the number.
//
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
//
const evensAndOdds = number => {
	let sumEven = 0;
	let sumOdd = 0;

	let evenArray = [];
	let oddArray = [];
	for (let a = 0; a <= number; a++) {
		if (a % 2 === 1) {
			evenArray.push(a);
			sumOdd += a;
		} else {
			oddArray.push(a);
			sumEven += a;
		}
	}

	console.log(
		`The sum of odds are -> ${sumOdd}\nThe length of the odds array -> ${evenArray.length}`
	);
	console.log("~");
	console.log(
		`The sum of evens are -> ${sumEven}\nThe length of the evens array -> ${oddArray.length}`
	);
};
evensAndOdds(100);
console.log("~~~~~~~~~~~~~");
// Question 14
// Write a function which takes any number of arguments and return the sum of the arguments.
//
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
//
const sum = (...args) => {
	let sum = 0;
	for (let a = 0; a < args.length; a++) {
		sum += args[a];
	}
	return sum;
};
console.log(`1, 2, 3 -> ${sum(1, 2, 3)}`);
console.log(`1, 2, 3, 4 -> ${sum(1, 2, 3, 4)}`);

console.log("~~~~~~~~~~~~~");
// Question 15
// Write a function which generates a randomUserIp.
//
const randomUserIp = () => {
	let number = [];

	for (let a = 0; a <= 10; a++) {
		// 0 to 20
		let numbeRandom = Math.floor(Math.random() * 21);

		//
		if (number.indexOf(numbeRandom) === -1) {
			number.push(numbeRandom);
			console.log(`ID: ${numbeRandom}`);
		}
	}
};

randomUserIp();
console.log("~~~~~~~~~~~~~");
// Question 16
// Write a function which generates a randomMacAddress
//
const randomMacAddress = () => {
	// strings [0-1 a-f A-F]
	const str = "0123456789ABCDEFabcdef";

	// String to Array
	// "abc" -> ["a", "b", "c"]
	const strArr = str.split("");
	// The length of the Array
	const strArrLen = strArr.length;

	// New String
	let strAdd = "";

	// String to Array
	// "AC:F3:HB" -> ["AC", "F3", "HB"]
	let strArry = strAdd.split(":");

	// Only 6 groups
	for (let a = 0; a < 6; a++) {
		// Only 2 digits of group
		for (let b = 0; b < 2; b++) {
			// Number random
			const randomNumber = Math.floor(Math.random() * strArrLen);
			// Check it if the item exists and DON'T PUSH!
			if (strArry.indexOf(strArry[randomNumber] === -1)) {
				strAdd += strArr[randomNumber];
			}
		}
		// Check it if a is less than 5 then dont need to add colon dot
		if (a < 5) {
			strAdd += ":";
		} else {
			continue;
		}
	}
	// Print final
	console.log(strAdd);
};
randomMacAddress();
console.log("~~~~~~~~~~~~~");
// Question 17
// Declare a function name randomHexaNumberGenerator.
// When this function is called it generates a random hexadecimal number.
// The function return the hexadecimal number.
//
// console.log(randomHexaNumberGenerator());
// '#ee33df'
//
// [A-F a-f 0-9]
const randomHexaNumberGenerator = () => {
	// String
	const str = "0123456789ABCDEFabcdef";
	// Strin to Array => "abc" -> ["a", "b", "c"]
	const strArr = str.split("");
	// The length of array
	const strArrLen = strArr.length;
	// to variables
	let strNew = "#";

	for (let a = 0; a < 6; a++) {
		// 0 to the length of the array
		const randomNumber = Math.floor(Math.random() * strArrLen);
		strNew += strArr[randomNumber];
	}
	return strNew;
};

console.log(randomHexaNumberGenerator());
console.log("~~~~~~~~~~~~~");
// Question 18
// Declare a function name userIdGenerator.
// When this function is called it generates seven character id.
// The function return the id.
//
// console.log(userIdGenerator());
// 41XTDbE
//
const userIdGenerator = () => {
	const characters =
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	// the length of array
	const charaLen = characters.length;

	// "abc" -> ["a", "b", "c"]
	const strArr = characters.split("");
	// String new
	let str = "";

	// 0 to 5
	for (let a = 0; a < 6; a++) {
		// number random
		// 0 to the length of array
		const numbeRandom = Math.floor(Math.random() * charaLen);
		str += strArr[numbeRandom];
	}
	return `ID: ${str}`;
};
console.log(userIdGenerator());
console.log("~~~~~~~~~~~~~");
