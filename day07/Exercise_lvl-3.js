// Question 1
// Modify question number n.
// Declare a function name userIdGeneratedByUser.
// It doesn't take any parameter but it takes two inputs using prompt().
// The first input is the number of characters and
// the second input is the number of ids which are supposed to be generated.
//
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
//
const userIdGeneratedByUser = () => {
	const numberChar = prompt("Please enter your number of characters");
	const numberID = prompt("Please enter your number to be generated");

	const characters =
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	// String to Array per ""
	const charactersArray = characters.split("");
	const charactersLen = charactersArray.length;

	let str = "";

	// if numberID is than the length of the characters array
	if (numberID < charactersLen) {
		// Column |
		for (let a = 0; a < 5; a++) {
			// Row --
			for (let b = 0; b < numberChar; b++) {
				// Number random
				const numberRandom = Math.floor(Math.random() * numberID);
				//
				str += charactersArray[numberRandom];
			}
			// New line
			str += "\n";
		}
		// Print
		console.log(str);
	} else {
		// If numberID is greater than the length of the characters array
		console.log(`try only these numbers [1-${charactersLen}], try again late`);
	}
};

//userIdGeneratedByUser();
console.log("~~~~~~~~~~~~~~~~");
// Question 2
// Write a function name rgbColorGenerator and it generates rgb colors.
//
// rgbColorGenerator()
// rgb(125,244,255)
//
const rgbColorGenerator = () => {
	let number = [];
	//
	for (let a = 0; a < 3; a++) {
		// 0 to 255
		const numberRandom = Math.floor(Math.random() * 256);
		// number Random to array
		number.push(numberRandom);
	}
	const number1 = number[0];
	const number2 = number[1];
	const number3 = number[2];
	// print
	console.log(`rgb(${number1}, ${number2}, ${number3})`);
};
rgbColorGenerator();
console.log("~~~~~~~~~~~~~~~~");
// Question 3
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
//
const arrayOfHexaColors = () => {
	const strHexa = "ABCDEFabcdef";
	const nbrHexa = "0123456789";

	// string Hexadecimal join to number Hexadecimal
	const hexa = strHexa.concat(nbrHexa);
	// The length of hexadecimal array
	const hexaLen = hexa.length;

	const arrayHexa = [];

	let str = "#";

	// ['#a3e12f']
	// 0 to 5
	for (let a = 0; a <= 5; a++) {
		// 0 to the length of hexadecimal array
		const numberRandom = Math.floor(Math.random() * hexaLen);

		str += hexa[numberRandom];
	}
	arrayHexa.push(str);
	console.log(arrayHexa);
};
arrayOfHexaColors();
console.log("~~~~~~~~~~~~~~~~");
// Question 4
// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
//
const arrayOfRgbColors = () => {
	//
	// rgb(000,000,000);
	//
	const numbers = [];

	for (let a = 0; a < 3; a++) {
		// number random -> 0 to 255
		const numberRandom = Math.floor(Math.random() * 256);
		// 3 colors to array new
		numbers.push(numberRandom);
	}
	// 0 to 2 -> there are 3 numbers

	console.log(`rgb(${numbers[0]}, ${numbers[1]}, ${numbers[2]})`);
};
arrayOfRgbColors();
console.log("~~~~~~~~~~~~~~~~");
// Question 5
// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
//
const convertHexaToRgb = () => {
	// 1) First random Hexa color (Try or hexa random, these work both to convert)
	// 		#DA70D6 -> 6 digits and 3 groups of 2 two digits => DA 70 D6
	//
	// 16 symbols. characters uppercase o lowercase or both. these both work.
	const numberSymbols = "0123456789";
	const charsSymbols = "ABCDEF";
	// const charsSymbols = "abcdef";

	// characters join numbers
	const symbolsAll = numberSymbols.concat(charsSymbols);

	// the length of the symbols array
	let symbolsLen = symbolsAll.length;

	// "abc" -> ["a", "b", "c"];
	let arrSymbols = symbolsAll.split("");

	// Hexadecimal
	let strHexa = "#";

	for (let a = 0; a < 6; a++) {
		// number random -> 0 to 21
		const randomNumber = Math.floor(Math.random() * symbolsLen);
		// to string
		strHexa += arrSymbols[randomNumber];
	}
	// done Hexa
	console.log(strHexa);
	//
	//
	// 2) Second calculate
	//
	// 		Note: A - 10
	// 					B - 11
	// 					C - 12
	// 					D - 13
	// 					E - 14
	// 					F - 15
	//
	// 		e.g #DA70D6
	//
	//		first value DA
	//			* Take the first digit, D to decimal is 13
	//			* Multiply 13 by 16 * 13 = 208. -> this is the partial value
	//			* Take the second digit, A to decimal is 10
	//			* Add the partial value to the second digit. 208 + 10 = 218.
	//
	//			This means that 218 is the red value.
	//
	//		second value 70
	//			* Take the first digit, 7 to decimal is 7
	//			* Multiply 7 by 16 * 7 = 112. -> this is the partial value.
	//			* Take the second the digit, 0 to decimal is 0.
	//			* Add the partial value to the second digit. 112 + 0 = 112.
	//
	//			this means that 112 is the green value.
	//
	//		third value D6
	//			* Take the first digit. D to decimal is 13.
	//			* Multiply 13 by 16 * 13 = 208. this is the partial value.
	//			* Take the second the digit, 6 to decimal is 6.
	//			* Add the partial value to the second digit. 208 + 6 = 214.
	//
	//			this means that 214 is the blue value.
	//
	//			Giving us our FINAL result of rgb(218, 112, 214).
	//
	//
	// '#DA70D6' -> ["#", "D", "A", "7", "0", "D", "6"];
	// String to array
	const hexaArry = strHexa.split("");

	// only 3 elements
	// rgb(1, 2, 3);
	let rgbArray = [];

	//const charsSymbols = "ABCDEF";
	// string to array
	const arrChar = charsSymbols.split("");
	//
	const symbolsNumber = [10, 11, 12, 13, 14, 15];
	//
	// length of the hexa array
	const strHexaLen = hexaArry.length;

	// 1, 3, 5 index of the hexa
	for (let a = 1; a < strHexaLen; a = a + 2) {
		// Check it only characters ABCEF to convert to decimal
		// returns the first index at which a given element can be found in the array
		const isFound = arrChar.indexOf(hexaArry[a]);
		//
		let number2 = 0;
		let number4 = 0;
		//
		// Characters to decimal
		if (isFound !== -1) {
			// A -> 10
			// B -> 11 ...
			const number1 = symbolsNumber[isFound];
			// if the A to decimal and multiply by 16
			// 10 * 16
			number2 = number1 * 16;

			// Check it if elemen is string or characters ABCDEF
			const isFound2 = arrChar.indexOf(hexaArry[a + 1]);
			if (isFound2 !== -1) {
				const number3 = symbolsNumber[isFound2];
				number4 = number2 + number3;

				// if the element is not a character (ABCDEF)
			} else {
				// string to number
				const nbr = parseInt(hexaArry[a + 1]);

				number4 = number2 + nbr;
			}
			rgbArray.push(number4);
		} else {
			number2 = hexaArry[a] * 16;

			// Check it if elemen is string or characters ABCDEF
			const isFound2 = arrChar.indexOf(hexaArry[a + 1]);
			if (isFound2 !== -1) {
				//
				const number3 = symbolsNumber[isFound2];
				number4 = number2 + number3;

				// if the element is not a character (ABCDEF)
			} else {
				// string to number
				const nbr = parseInt(hexaArry[a + 1]);
				number4 = number2 + nbr;
			}
			rgbArray.push(number4);
		}
	}
	// done hexa to numbers rgb
	//console.log(rgbArray);
	//
	// 3) Third to print
	//
	const r = rgbArray[0];
	const g = rgbArray[1];
	const b = rgbArray[2];

	const rgbColor = `rgb(${r}, ${g}, ${b})`;

	console.log(rgbColor);
};
convertHexaToRgb();
console.log("~~~~~~~~~~~~~~~~");
// Question 6
// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
//
//
const convertRgbToHexa = () => {
	// 1) rgb random 255 ->  rgb(0,0,0)
	let numberArray = [];
	for (let a = 0; a < 3; a++) {
		// Number random 0 to 255
		const randomNumber = Math.floor(Math.random() * 256);

		numberArray.push(randomNumber);
	}
	const rgbOne = numberArray[0];
	const rgbTwo = numberArray[1];
	const rgbThree = numberArray[2];

	// print rgb(0, 0, 0)
	console.log(`rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`);

	// 2) calculate to hexa
	//  number rgb / 16
	const numberOne = rgbOne / 16;
	const numberTwo = rgbTwo / 16;
	const numberThree = rgbThree / 16;

	// Only integer
	// 13.25 -> 13
	const onlyIntOne = Math.floor(numberOne);
	const onlyIntTwo = Math.floor(numberTwo);
	const onlyIntThree = Math.floor(numberThree);

	// Only decimal
	// 13.25 -> 0.25
	const onlyDecOne = numberOne - onlyIntOne;
	const onlyDecTwo = numberTwo - onlyIntTwo;
	const onlyDecThree = numberThree - onlyIntThree;

	// Multiply by 16
	// 0.25 * 16
	const decimalHexaOne = onlyDecOne * 16;
	const decimalHexaTwo = onlyDecTwo * 16;
	const decimalHexaThree = onlyDecThree * 16;

	// String
	const strDecimal = "0123456789ABCDEF";
	// String to Array - 16 characters
	const hexaDecimal = strDecimal.split("");

	// HEXA FINAL
	const one = hexaDecimal[onlyIntOne];
	const two = hexaDecimal[decimalHexaOne];

	const three = hexaDecimal[onlyIntTwo];
	const four = hexaDecimal[decimalHexaTwo];

	const five = hexaDecimal[onlyIntThree];
	const six = hexaDecimal[decimalHexaThree];

	// Join all
	const fullFinal = one.concat(two, three, four, five, six);

	console.log(`#${fullFinal}`);

	// 3) print hexa
};
convertRgbToHexa();
console.log("~~~~~~~~~~~~~~~~");
// Question 7
// Write a function generateColors which can generate any number of hexa or rgb colors.
//
// console.log(generatecolors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generatecolors('hexa', 1)) // '#b334ef'
// console.log(generatecolors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generatecolors('rgb', 1)) // 'rgb(33,79, 176)'
//
const generatecolors = (name, len) => {
	//
	if (len <= 0) {
		return "Try only numbers integer, try again later!.";
	} else {
		// Check it if the name is hexa or rgb or doesn't exist
		if (name === "hexa") {
			//
			const arrayHexa = [];

			const hexa = "0123456789ABCDEF";
			// the length of the hexa array
			let hexaLen = hexa.length;

			// new strHexa with #
			let strHexa = "#";
			// string to array
			// "abc" -> ["a", "b", "c"];
			const hexaArray = hexa.split("");
			//
			// column
			for (let a = 0; a < len; a++) {
				// Hexa has 3 groups of 2 elemets
				// #D0 3D 81
				// row like hexa
				for (let b = 0; b < 6; b++) {
					// number random
					const randomNumber = Math.floor(Math.random() * hexaLen);

					strHexa += hexaArray[randomNumber];
				}
				// to push to array
				arrayHexa.push(strHexa);
				// create new array again
				strHexa = "#";
			}

			// if the length is 1 so it must print one like [0];
			if (len === 1) {
				// Print a array like a object
				return arrayHexa[0];
			} else {
				// Print all array
				return arrayHexa;
			}

			// if user choosen rgb and let's begin here
		} else if (name === "rgb") {
			// rgb(0, 0, 0)
			//
			let arrayRgb = [];

			// column
			for (let a = 0; a < len; a++) {
				//
				if (!arrayRgb[a]) {
					arrayRgb[a] = [];
				}
				// row
				// rgb has 3 groups of 0 to 255
				for (let b = 0; b < 3; b++) {
					// number random
					const randomNumber = Math.floor(Math.random() * 256);
					// go to array with number random
					arrayRgb[a][b] = randomNumber;
				}
			}
			// console.log(arrayRgb);

			// new array final
			let rgbFinal = [];

			// the lenght of the arra -> , rgb(1, 2, 3);
			for (let ac = 0; ac < arrayRgb.length; ac++) {
				// let's built string with array
				const str = `rgb(${arrayRgb[ac][0]}, ${arrayRgb[ac][1]}, ${arrayRgb[ac][2]})`;
				// to push str to new array final
				rgbFinal.push(str);
			}

			// The length is one and it must print one
			if (len === 1) {
				return rgbFinal[0];
			} else {
				// if the lenght is greater than 1 and it must print all arrays;
				return rgbFinal;
			}
		} else {
			// only rgb and/or hexa
			// if the name doesn't exist and print a message.
			return "This is not exist !, try again later";
		}
	}
};
console.log(generatecolors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generatecolors("hexa", 1)); // '#b334ef'
console.log(generatecolors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generatecolors("rgb", 1)); // 'rgb(33,79, 176)'
console.log("~~~~~~~~~~~~~~~~");
// Question 8
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
//
const shuffleArray = (...args) => {
	// args Array
	let str = args[0];
	// the length of the args array
	let strLen = args[0].length;

	// e.g 5 to 0 -> 0 or zero doestn't work in while loop
	while (strLen) {
		// number random and strLen--
		// e.g
		// strLen -> 11 AND number random 0 to 10
		// strLen -> 10 AND number random 0 to 9
		// strLen -> 9 AND number random 0 to 8
		// strLen -> 8 AND number random 0 to 7
		// ..
		let b = Math.floor(Math.random() * strLen--);

		// this is a swap and there's not copy
		let temp = str[strLen];
		str[strLen] = str[b];
		str[b] = temp;
	}
	// Print
	console.log(str);
};
shuffleArray(["a", "b", "c", "d", "e"]);
shuffleArray(["a", "b", "c"]);
shuffleArray([1, 2, 3, 4]);
shuffleArray([15, 16, 17, 18, 19]);

console.log("~~~~~~~~~~~~~~~~");
// Question 9
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
//
const factorial = nbr => {
	//
	let a = 1;
	while (a < nbr) {
		let b = 2;
		while (b < nbr) {
			// 1 = 1 * 2
			// 2 = 2 * 3
			// 6 = 6 * 4
			// ...
			a = a * b;
			b++;
		}
		// 6 = 6 * 4
		a = a * b;
	}
	return a;
	//
};
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
console.log("~~~~~~~~~~~~~~~~");
// Question 10
// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
//
const isEmpty = name => {
	let isName = name.trim();
	if (isName) {
		return `Bienvenido ${isName}`;
	} else {
		return `your name is empty, try again later.`;
	}
};
console.log(isEmpty("     "));
console.log(isEmpty("Sebastian"));
console.log(isEmpty("   Sebastian"));
console.log("~~~~~~~~~~~~~~~~");
// Question 11
// Call your function sum, it takes any number of arguments and it returns the sum.
//
const sum = nbr => {
	let a = 1;
	while (a < nbr) {
		let b = 2;
		while (b < nbr) {
			// 1 = 1 + 2
			// 3 = 3 + 3
			// 6 = 6 + 4
			// 10 = 10 + 5
			// 15 = 15 + 6
			// 21 = 21 + 7
			// ...
			a = a + b;
			b++;
		}
		// 15 = 15 + 6
		a = a + b;
	}
	return a;
};
console.log(sum(5));
console.log(sum(6));

console.log("~~~~~~~~~~~~~~~~");
// Question 12
// Write a function called sumOfArrayItems,
// it takes an array parameter and return the sum of all the items.
// Check if all the array items are number types.
// If not give return reasonable feedback.
//
const sumOfArrayItems = (...args) => {
	// number Array
	let nbrArry = args[0];
	// the length of the number array
	let nbrArryLen = nbrArry.length;
	//
	let isBool = true;

	for (let a = 0; a < nbrArryLen; a++) {
		// number === number: true -> false
		// number === string: false -> true
		// number === boolean: false -> true
		if (typeof nbrArry[a] !== "number") {
			isBool = false;
		}
	}

	// true means all elements are numbers
	if (isBool) {
		let a = 0;

		while (a < nbrArryLen) {
			let b = 1;

			a = nbrArry[a];

			while (b < nbrArryLen) {
				a = a + nbrArry[b];
				b++;
			}
		}
		// print
		console.log(a);
		// false means all elements are not numbers;
	} else {
		console.log("All items are not number types");
	}
};
sumOfArrayItems([1, 2, 3, 4, 5]);
sumOfArrayItems([1, 2, 3, 4, 5, 6]);
sumOfArrayItems([1, 2, 3, 4, 5, 6, 7]);
sumOfArrayItems([1, 2, 3, 4, 5, 6, 7, 8]);

console.log("~~~~~~~~~~~~~~~~");
// Question 13
// Write a function called average, it takes an array parameter and returns the average of the items.
// Check if all the array items are number types. If not give return reasonable feedback.
//
const average = (...args) => {
	// number Array
	let nbrArry = args[0];
	// the length of the number array
	let nbrArryLen = nbrArry.length;
	//
	let isBool = true;

	for (let a = 0; a < nbrArryLen; a++) {
		// number === number: true -> false
		// number === string: false -> true
		// number === boolean: false -> true
		if (typeof nbrArry[a] !== "number") {
			isBool = false;
		}
	}

	// true means all elements are numbers
	if (isBool) {
		let a = 0;

		while (a < nbrArryLen) {
			let b = 1;

			a = nbrArry[a];

			while (b < nbrArryLen) {
				a = a + nbrArry[b];
				b++;
			}
		}
		// print / the length of number array
		console.log(a / nbrArryLen);
		// false means all elements are not numbers;
	} else {
		console.log("All items are not number types");
	}
};

average([1, 2, 3, 4, 5]);
average([1, 2, 3, 4, 5, 6]);
average([1, 2, 3, 4, 5, 6, 7]);
average([1, 2, 3, 4, 5, 6, 7, 10]);

console.log("~~~~~~~~~~~~~~~~");
// Question 14
// Write a function called modifyArray takes array as parameter and modifies the
// fifth item of the array and return the array.
// If the array length is less than five it return 'item not found'.
//
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
//
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
//
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
// 'Not Found'
//
const modifyArray = (...args) => {
	const strArray = args[0];
	// the array length
	let strArrayLen = strArray.length;

	// new array or copy then it our array is not affected!
	let arrayStr = [];

	// the array length is less than five
	// 6 > 4 -> true
	// 5 > 4 -> true
	// 4 > 4 -> false
	if (strArrayLen > 4) {
		for (let a = 0; a < strArrayLen; a++) {
			if (a === 4) {
				arrayStr.push(strArray[a].toUpperCase());
			} else {
				arrayStr.push(strArray[a]);
			}
		}
		return arrayStr;
	} else {
		return "Not found";
	}
};

console.log(
	modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
	modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));
console.log("~~~~~~~~~~~~~~~~");
// Question 15
// Write a function called isPrime, which checks if a number is prime number.
//
const isPrime = nbr => {
	if (nbr === 1) {
		return `this ${nbr} is considered neither prime nor composite`;
	} else {
		let si = [];
		let j;
		let pri = [];
		let max = nbr;

		for (let i = 2; i <= max; ++i) {
			if (!si[i]) {
				pri.push(i);
				for (j = i << 1; j <= max; j += i) {
					si[j] = true;
				}
			}
		}
		if (pri.includes(nbr)) {
			return `this ${nbr} is a number prime`;
		} else {
			return `this ${nbr} is NOT a number prime`;
		}
	}
};

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(10));
console.log(isPrime(13));
console.log(isPrime(17));
console.log(isPrime(19));
console.log("~~~~~~~~~~~~~~~~");
// Question 16
// Write a functions which checks if all items are unique in the array.
//
const checkItems = name => {
	const nameLen = name.length;

	let a = 0;
	let isTrue = true;
	while (a < nameLen) {
		let b = 1;
		while (b < nameLen) {
			if (a === b) {
				b++;
			}
			if (name[a] === name[b]) {
				isTrue = false;
				break;
			}
			b++;
		}
		a++;
	}

	if (isTrue) {
		console.log("All items are unique");
	} else {
		console.log("All items are NOT unique");
	}
};

checkItems(["paola", "sebastian", "jeannie", "luceli", "sofia", "paola"]); // NOT UNIQUE
checkItems(["paola", "sebastian", "jeannie", "jeannie", "sofia"]); // NOT UNIQUE
checkItems(["paola", "sebastian", "jeannie", "luceli", "sofia"]); // YES UNIQUE
checkItems(["paola", "sebastian", "jeannie", "sebastian", "sofia"]); // NOT UNIQUE
checkItems([1, 2, 3, 4, 5, 3]); // NOT UNIQUE
checkItems([1, 2, 3, 4, 5, 10]); // YES UNIQUE
console.log("~~~~~~~~~~~~~~~~");
// Question 17
// Write a function which checks if all the items of the array are the same data type.
//
const checkType = name => {
	const nameLen = name.length;

	let a = 1;
	let isTrue = true;
	while (a < nameLen) {
		// if the first array is number or string for check it all array
		if (typeof name[0] !== typeof name[a]) {
			isTrue = false;
		}
		a++;
	}

	if (isTrue) {
		console.log("All type are same");
	} else {
		console.log("All type are NOT same");
	}
};
checkType(["paola", "sebastian", "jeannie", "luceli", "sofia", "Sandra"]);
checkType(["paola", "sebastian", "jeannie", "luceli", "sofia", true]);
checkType(["Yahoo", "Facebook", "Google", "Apple", "Microsoft"]);
checkType(["Sabas", "sebastian", "jeannie", "luceli", "sofia", 2, "sebas"]);
checkType([1, 2, 3, 4, "sebas"]);
checkType([1, 2, 3, 4, 20]);
console.log("~~~~~~~~~~~~~~~~");
// Question 18
// JavaScript variable name does not support special characters or symbols except $ or _.
// Write a function isValidVariable which check if a variable is valid or invalid variable.
//
const isValidVariable = name => {
	// Regular Expressions(regEx)
	// [^] -> negated set: Match any character that is not in the set.
	// $ -> Match $ character that is not in the set if it is inside [^]
	// \w -> Matches any word character(alphanumeric & underscore)[A-Za-z0-9_]
	// \d -> digit (0-9)
	// \s -> whitespace
	// flag g -> global search
	// flag i -> ignore case
	const regex = /[^$\w\s]/gi;

	const isValid = name.match(regex);

	// null -> true
	// it means there are not special characters
	if (!isValid) {
		console.log(`${name} -> Valid`);
	} else {
		console.log(`${name} -> Invalid`);
	}
};
isValidVariable("Sebastian");
isValidVariable("Sebastian+");
isValidVariable("$Luceli");
isValidVariable("$Sebas_Carrera");
isValidVariable("&Sofia");
isValidVariable("#1234");
isValidVariable("1234");
isValidVariable("Sebastian\\ carrera");
isValidVariable("Sebastian carrera\\");
isValidVariable("Sebastian/ carrera/");
// All characters special are invalid except $ and _
isValidVariable("~!@#%^&*()+-=[]{};:<>,.");

console.log("~~~~~~~~~~~~~~~~");
// Question 19
// Write a function which returns array of seven random numbers in a range of 0-9.
// All the numbers must be unique.
//
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
//
const numberUnique = () => {
	// Array
	let number = [];

	// 7 elements
	let range = 7;
	while (range) {
		// range of 0-9
		let b = Math.floor(Math.random() * 10);
		//
		//  if the array is empty and it adds one
		if (number.length === 0) {
			// number random to push
			number.push(b);
			range--;
			// if the number random is found in number array
		} else if (number.includes(b)) {
			continue;
		} else {
			// number random to push
			number.push(b);
			range--;
		}
	}
	return number;
};

console.log(numberUnique());
console.log(numberUnique());
console.log(numberUnique());
console.log(numberUnique());
console.log(numberUnique());
console.log("~~~~~~~~~~~~~~~~");
// Question 20
// Write a function called reverseCountries,
// it takes countries array and first it copy the array and returns the reverse of the original array
//
const countries = ["COLOMBIA", "United states", "Spain", "Germany", "Canada"];
const countries1 = ["COLOMBIA", "United states", "Spain", "Germany", "Canada", "China"];
// it can check number type and reverse too
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nameF = [1, 20, 60, 80, 100];

const reverseCountries = elem => {
	// the length of the array
	let elemLen = elem.length - 1;
	// length / 2
	let mid = Math.floor(elemLen / 2);

	// Copy the array
	// [...elem] -> ES6
	let copyArray = [...elem];

	let b = 0;
	//
	while (mid < elemLen) {
		//
		let temp = elem[elemLen];
		elem[elemLen] = elem[b];
		elem[b] = temp;

		elemLen--;
		b++;
	}

	// elem is the original array
	// copyArray is the copy array
	//
	console.log(`* Copy the array:\n${copyArray}`);
	console.log(`* The reverse of the original array:\n${elem}`);
};

reverseCountries(countries);
console.log("##");
reverseCountries(countries1);
console.log("##");
reverseCountries(number);
console.log("##");
reverseCountries(nameF);
console.log("~~~~~~~~~~~~~~~~");
