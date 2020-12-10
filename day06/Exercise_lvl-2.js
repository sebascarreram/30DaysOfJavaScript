const { countries } = require("./countries");
const { webTechs } = require("./web_techs");
const { mernStack } = require("./mernStack");

console.log("~~~~~~~~~~");
// Question 1
// Develop a small script which generate any number of characters random id:
//
// [0-9] -> 10 lengths
// [A-Za-z] -> 52 lengths
const characters =
	"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// String to Array with split in characters ~ "abc" -> ["a", "b", "c"]
let strArray = characters.split("");

// Random from 0 to 15
let numbeRandom = Math.floor(Math.random() * 16);

// A string empty
let string = "";

// Print any number(random) until stop Loop for
for (let a = 0; a <= numbeRandom; a++) {
	// Random from 0 to 60
	let rd = Math.floor(Math.random() * 61);
	string += strArray[rd];
}
console.log(string);

console.log("~~~~~~~~~~");
// Question 2
// Write a script which generates a random hexadecimal number.
//
// '#ee33df'
//
const stringHex = "ABCEFabcdef";
const numberHex = "0123456789";

const stringConc = stringHex.concat(numberHex);

const stringArray = stringConc.split("");

let strHex = "";

for (let b = 0; b <= 5; b++) {
	// Random from 0 to 20
	let nbRandom = Math.floor(Math.random() * 21);

	strHex += stringArray[nbRandom];
}

console.log(`#${strHex}`);

console.log("~~~~~~~~~~");
// Question 3
// Write a script which generates a random rgb color number
//
// rgb(240,180,80)
//
let numbeRgb = [];

for (let ac = 0; ac < 3; ac++) {
	// Random from 0 to 255
	let rgbRandom1 = Math.floor(Math.random() * 256);

	if (numbeRgb.length === 0) {
		numbeRgb.push(rgbRandom1);
		continue;
	}
	numbeRgb.push(rgbRandom1);
}
console.log(`rgb(${numbeRgb[0]}, ${numbeRgb[1]}, ${numbeRgb[2]})`);

console.log("~~~~~~~~~~");
// Question 4
// Using the above countries array, create the following new array.
//
// New array empty
let newCountry = [];

// 0 to countries length and stop for loop
for (let ae = 0; ae < countries.length; ae++) {
	// if country is empty and it might to add one country and to uppercase
	if (newCountry.length === 0) {
		// Array to new Array uppercase
		newCountry.push(countries[ae].toUpperCase());
	}
	// Array to new Array uppercase
	newCountry.push(countries[ae].toUpperCase());
}
// Print new Array uppercase
console.log(newCountry);

console.log("~~~~~~~~~~");
// Question 5
// Using the above countries array, create an array for countries length'.
//
// New array empty
let countriesLen = [];
// 0 to countries length and stop for loop
for (let t = 0; t < countries.length; t++) {
	// if country is empty and it might to add one country length
	if (countriesLen.length === 0) {
		countriesLen.push(countries[t].length);
	}
	// Array to new Array length
	countriesLen.push(countries[t].length);
}
// Print new Array countries length
console.log(countriesLen);

console.log("~~~~~~~~~~");
// Question 6
// Use the countries array to create the following array of arrays:
//
//  [
//  	['Albania', 'ALB', 7],
//  	['Bolivia', 'BOL', 7],
//  	['Canada', 'CAN', 6],
//  	['Denmark', 'DEN', 7],
//  	['Ethiopia', 'ETH', 8],
//  	['Finland', 'FIN', 7],
//  	['Germany', 'GER', 7],
//  	['Hungary', 'HUN', 7],
//  	['Ireland', 'IRE', 7],
//  	['Japan', 'JAP', 5],
//  	['Kenya', 'KEN', 5]
//	]
//
// New array empty
let countryArray = [];

// Count country until stop
for (let at = 0; at < countries.length; at++) {
	// Extracting a part of a string - position start ~ 0 and position end ~ 3
	// To converte toUpperCase
	const wordThree = countries[at].slice(0, 3).toUpperCase();

	// The length of a string
	const countryLenght = countries[at].length;

	// Push to Array New with Array
	countryArray.push([countries[at], wordThree, countryLenght]);
}
// Print countries Array of the Array
console.log(countryArray);
console.table(countryArray);

console.log("~~~~~~~~~~");
// Question 7
// In above countries array, check if there is a country or countries
// containing the word 'land'. If there are countries containing 'land',
// print it as array. If there is no country containing the word 'land',
// print 'All these countries are without land'.
//
// ['Finland', 'Iceland']
//
// Check if there are countries
// 0 !== 0 -> false
// 3 !== 0 -> true
if (countries.length !== 0) {
	// New array empty
	let newArrayLand = [];
	let countrLen = countries.length;
	let strLand = "land";

	// Count countries until stop
	for (let aw = 0; aw < countries.length; aw++) {
		// The length of a string
		const len = countries[aw].length;

		// Find each country if it finds and it follows continue.
		// true or false
		if (countries[aw].includes(strLand)) {
			//  Extracting a part of a string
			//
			const wordLand = countries[aw].slice(len - 4, len);

			// If a string has a "land" in end postion so it might print
			if (wordLand === strLand) {
				// Found and to push to new Array
				newArrayLand.push(countries[aw]);
			} else {
				// Continue if there is not find yet
				continue;
			}
		}
	}
	// Print all
	console.log(
		newArrayLand.length === 0
			? "All these countries are without 'land'"
			: newArrayLand
	);
} else {
	// Print
	console.log("There are not countries");
}

console.log("~~~~~~~~~~");
// Question 8
// In above countries array, check if there is a country or countries end with
// a substring 'ia'. If there are countries end with, print it as array.
// If there is no country containing the word 'ai',
// print 'These are countries ends without ia'.
//
// ['Albania', 'Bolivia','Ethiopia']
//
// Check if there are countries
// 0 !== 0 -> false
// 3 !== 0 -> true
if (countries.length !== 0) {
	// New array empty
	let newArrayIa = [];
	let countrLen = countries.length;
	let strIa = "ia";

	// Count countries until stop
	for (let aw = 0; aw < countries.length; aw++) {
		// The length of a string
		const len = countries[aw].length;

		// Find each country if it finds and it follows continue.
		// true or false
		if (countries[aw].includes(strIa)) {
			//  Extracting a part of a string
			//
			const wordLand = countries[aw].slice(len - 2, len);

			// If a string has a "land" in end postion so it might print
			if (wordLand === strIa) {
				// Found and to push to new Array
				newArrayIa.push(countries[aw]);
			} else {
				// Continue if there is not find yet
				continue;
			}
		}
	}

	// Print all
	console.log(
		newArrayIa.length === 0
			? "These are countries ends without 'ia'"
			: newArrayIa
	);
} else {
	// Print
	console.log("There are not countries");
}

console.log("~~~~~~~~~~");
// Question 9
// Using the above countries array, find the country containing the biggest number of characters.
//
// Ethiopia
//
let a = 0;
let b = 0;

// length = 11
let countrLen = countries.length;
//
// 0 < 11
while (a < countrLen) {
	// 0 < 11
	while (b < countrLen) {
		// If the array exits in case the last array
		if (countries[a]) {
			// comparing lengths
			// if first country is greater than second country
			if (countries[a].length > countries[b].length) {
				// Go to addition and check it other country
				b++;
			} else {
				// If it's not greater than it so
				// It would be the greather than country previus
				a++;
			}
		} else {
			// STOP WHILE
			break;
		}
	}
	console.log(countries[b]);
}

console.log("~~~~~~~~~~");
// Question 10
// Using the above countries array, find the country containing only 5 characters.

let countryFive = [];

for (let a = 0; a < countrLen; a++) {
	if (countries[a].length === 5) {
		countryFive.push(countries[a]);
	}
}
console.log(countryFive);

console.log("~~~~~~~~~~");
// Question 11
// Find the longest word in the webTechs array

console.log(webTechs);

const webLen = webTechs.length;
let ac = 0;
let bc = 0;

// length = 11
//
// 0 < 11
while (ac < webLen) {
	// 0 < 11
	while (bc < webLen) {
		// If the array exits in case the last array
		if (webTechs[ac]) {
			// comparing lengths
			// if first country is greater than second country
			if (webTechs[ac].length < webTechs[bc].length) {
				// Go to addition and check it other country
				bc++;
			} else {
				// If it's not greater than it so
				// It would be the greather than country previus
				ac++;
			}
		} else {
			// STOP WHILE
			break;
		}
	}
	console.log("$");
	console.log("It is the longest word in the webTechs array");
	console.log(webTechs[bc]);
}

console.log("~~~~~~~~~~");
// Question 12
// Use the webTechs array to create the following array of arrays:
//
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//
//
let webArrayNew = [];

for (let aa = 0; aa < webTechs.length; aa++) {
	const le = webTechs[aa].length;

	webArrayNew.push([webTechs[aa], le]);
}
console.log(webArrayNew);
console.table(webArrayNew);
// console.log(webArrayNew[1][1]);

console.log("~~~~~~~~~~");
// Question 13
// An application created using MongoDB, Express, React and Node is called a MERN stack app.
// Create the acronym MERN by using the array mernStack.
//

let mernFirst = "";

for (let a = 0; a < mernStack.length; a++) {
	// Extracting a part of a string ->  "Hello" -> "H"
	// And to convert to Upper case if in case it's lower case
	let firstWord = mernStack[a].slice(0, 1).toUpperCase();

	mernFirst += firstWord;
}

console.log("Array");
console.log(mernStack);
console.log("~~");
console.log("First character in every element:");
console.log(mernFirst);

console.log("~~~~~~~~~~");
// Question 14
// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// using a for loop or for of loop and print out the items.
//
for (const web of webTechs) {
	console.log(web);
}

console.log("~~~~~~~~~~");
// Question 15
// This is a fruit array,
//
// ['banana', 'orange', 'mango', 'lemon']
//
// reverse the order using loop without using a reverse method.

console.log("- Fruits");
const fruits = ["banana", "orange", "mango", "lemon"];
console.log(fruits);
console.log("~~");

let fruitArray = [];

let fruitLen = fruits.length - 1;

for (let a = 0; a <= fruitLen; fruitLen--) {
	fruitArray.push(fruits[fruitLen]);
}
console.log("- Fruits without using a reverse method");
console.log(fruitArray);

console.log("~~~~~~~~~~");
// Question 16
// Print all the elements of array as shown below.
//
//   const fullStack = [
//   		['HTML', 'CSS', 'JS', 'React'],
//    	['Node', 'Express', 'MongoDB']
//  	]
//
//  HTML
//  CSS
//  JS
//  REACT
//  NODE
//  EXPRESS
//  MONGODB
//
let strWeb = "";
for (let a = 0; a < webTechs.length; a++) {
	strWeb += webTechs[a] + "\n";
}
console.log(strWeb);
