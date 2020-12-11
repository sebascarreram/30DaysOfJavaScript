const { countries } = require("./countries");
const { webTechs } = require("./web_techs");
const { mernStack } = require("./mernStack");
const { fullCountries } = require("./fullCountries");

console.log("~~~~~~~~~~~~");
// Question 1
// Copy countries array(Avoid mutation)
//
const copyCountry = [...countries];

console.log(copyCountry);
console.log("~~~~~~~~~~~~");
// Question 2
// Arrays are mutable. Create a copy of array which does not modify the original.
// Sort the copied array and store in a variable sortedCountries
//
// Clone here -> This is new - ES6
const copyArrayCountry = [...countries];
let countryLen = copyArrayCountry.length - 1;

// Sort the copied array
const sortedCountries = [];

while (0 <= countryLen) {
	sortedCountries.push(copyArrayCountry[countryLen]);
	countryLen--;
}

// Print sort countries
console.log(sortedCountries);

// if this copy array is equal to Original array?
// FALSE because this 'countries' pointing to a new memory space 'copyArrayCountry'
console.log(countries === copyArrayCountry);

console.log("~~~~~~~~~~~~");
// Question 3
// Sort the webTechs array and mernStack array
//
let sortedWeb = [];
let sortedMern = [];

console.log("Original");
console.log(webTechs);
console.log(mernStack);
console.log("~~");

let webLen = webTechs.length - 1;
let mernLen = mernStack.length - 1;

while (0 <= webLen) {
	sortedWeb.push(webTechs[webLen]);
	webLen--;
}
while (0 <= mernLen) {
	sortedMern.push(mernStack[mernLen]);
	mernLen--;
}
console.log("Sort arrays");
console.log(sortedWeb);
console.log(sortedMern);

console.log("~~~~~~~~~~~~");
// Question 4
// Extract all the countries contain the word 'land' from the countries array and print it as array
//
let newArrayCountry = [];
let fullCountryLen = fullCountries.length;
console.log(`There are ${fullCountryLen} countries`);

if (fullCountries.length === 0) {
	console.log("There is not country right now, try late again.");
} else {
	// For loop
	for (let a = 0; a < fullCountryLen; a++) {
		// Length of countries
		const onlyCountryLen = fullCountries[a].length;

		// To extract a part of a string - only 'land'
		let onlyLand = fullCountries[a].slice(onlyCountryLen - 4);

		// If 'onlyLand' is same than 'land'
		if (onlyLand === "land") {
			// To push to new Array if it's found this
			newArrayCountry.push(fullCountries[a]);
		}
	}
}
console.log(newArrayCountry);
console.log(`There are ${newArrayCountry.length} which it has 'land'`);
console.log("~~~~~~~~~~~~");
// Question 5
// Find the country containing the hightest number of characters in the countries array
//

let ac = 0;
let ab = 0;

while (ac < fullCountryLen) {
	while (ab < fullCountryLen) {
		// If ac is same than length of fullCountries so it might stop to count in for while
		if (ac === fullCountryLen) {
			break;
		} else {
			// Note: space is a character which it can count.
			if (fullCountries[ac].length > fullCountries[ab].length) {
				ab++;
			} else {
				ac++;
			}
		}
	}
	console.log(
		`This '${fullCountries[ab]}' is the hightest number of characters`
	);
}

console.log("~~~~~~~~~~~~");
// Question 6
// Extract all the countries containing only four characters from the countries array and print it as array
//
let arraNewCountry = [];

for (let a = 0; a < fullCountryLen; a++) {
	// e.g
	// "sebas" ->  5 lengths
	let countryOne = fullCountries[a].length;

	// only fours characters
	if (countryOne === 4) {
		arraNewCountry.push(fullCountries[a]);
	}
}
// Print
console.log("Countries containing only four characters");
console.log(arraNewCountry);

console.log("~~~~~~~~~~~~");
// Question 7
// Extract all the countries containing two or more words from the countries array and print it as array
//
let arraNewCountry1 = [];

for (let a = 0; a < fullCountryLen; a++) {
	// String to Array
	// e.g.
	// "Sebastian Carrera" -> ["Sebastian", "Carrera"]
	let countryWords = fullCountries[a].split(" ");

	// e.g
	// ["Sebastian", "Carrera"] -> 2 lengths
	let wordsLen = countryWords.length;

	// two or more words
	if (wordsLen >= 2) {
		arraNewCountry1.push(fullCountries[a]);
	}
}
// Print
console.log("Countries containing two or more words from the countries array");
console.log(arraNewCountry1);
console.log("~~~~~~~~~~~~");
// Question 8
// Reverse the countries array and capitalize each country and stored it as an array
//
let newArrayCountry2 = [];
let countryLen1 = fullCountries.length - 1;

for (let a = 0; a < countryLen1; countryLen1--) {
	// Countries
	let country = fullCountries[countryLen1];
	// To uppercase
	let countryToUpper = country.toUpperCase();
	// To push to new Array with uppercase
	newArrayCountry2.push(countryToUpper);
}
// Print
console.log(newArrayCountry2);
