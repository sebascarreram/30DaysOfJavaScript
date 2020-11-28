console.log("~~~~~~~~~~~~~~~~~~");
// Question 2
const numbers = [1, 2, 3, 4, 5, 8, 9, 10];
console.log(numbers);

// Question 3
const numbersLen = numbers.length;

console.log(`The size of the array: ${numbersLen}`);

console.log("~~~~~~~~~~~~~~~~~~");
// Question 4
// Get the first item, the middle item and the last item of the array
//
const firstItem = numbers[0];

let numbersMiddle;

if (numbers.length === 2) {
	numbersMiddle = "There is not item in medium";
} else {
	if (numbers.length % 2 === 0) {
		numbersMiddle = numbers.slice(
			Math.floor(numbersLen) / 2 - 1,
			Math.floor(numbersLen) / 2 + 1
		);
	} else {
		// oneItemMiddle = itCompanies.splice(notFloor, 1);
		numbersMiddle = numbers[Math.floor(numbersLen / 2)];
	}
}

// Last item in Array
const lastItem = numbers[numbersLen - 1];

// Check it if there is one item to add 'Middle item'
// Check it if there are two items to add 'Middle items'
const strMiddle = numbersMiddle > 1 ? 'Middle item' : 'Middle items';

console.log(
	`First item: ${firstItem} || ${strMiddle}: ${numbersMiddle} || Last item: ${lastItem}`
);

console.log("~~~~~~~~~~~~~~~~~~");
// Question 5
//
// Declare an array called mixedDataTypes, put different data types in the
// array and find the length of the array.
// The array size should be greater than 5.
//

const mixedDataTypes = [
	"Sebastian",
	26,
	true,
	{ country: "Colombia", city: "Cali" },
	{ color: "red" },
	{ address: "#####" }
];

const mixedLeng = mixedDataTypes.length;

console.log(mixedDataTypes);
const messageOne = `This array has: ${mixedLeng}`;
const messageTwo = `This array size sould be greater than 5, Try again later`;

const finalMixed = mixedLeng > 5 ? messageOne : messageTwo;

console.log(finalMixed);

console.log("~~~~~~~~~~~~~~~~~~");
// Questions 6, 7, 8, 9, 10,.......23
// Declare an array variable name itCompanies and assign initial values
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//
const itCompanies = [
	"Facebook",
	"Google",
	"Microsoft",
	"Apple",
	"IBM",
	"Oracle",
	"Amazon"
];
// Print
console.log(itCompanies);

// The size of array Companies
let companiesLen = itCompanies.length;
console.log(companiesLen);

const firstCompany = itCompanies[0];
const lastCompany = itCompanies[companiesLen - 1];

console.log(`First company: ${firstCompany} || Last company: ${lastCompany}`);

// Print out each company
console.log(`1. ${itCompanies[0]}`);
console.log(`2. ${itCompanies[1]}`);
console.log(`3. ${itCompanies[2]}`);
console.log(`4. ${itCompanies[3]}`);
console.log(`5. ${itCompanies[4]}`);
console.log(`6. ${itCompanies[5]}`);
console.log(`7. ${itCompanies[companiesLen - 1]}`);

// Change each company name to uppercase one by one and print them out
console.log(itCompanies.join(", ").toUpperCase());

// Print the array like as a sentence:
// Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//
const senc = [
	"Facebook",
	"Google",
	"Microsoft",
	"Apple",
	"IBM",
	"Oracle and Amazon are big IT companies"
];
// Array to String
console.log(senc.toString());

console.log("~~~~~~~~~~~~~~~");
// Check if a certain company exists in the itCompanies array.
// If it exist return the company else return a company is not found.
//
const nameCompany = "FaceBOokd";

// First character to Upper case
const firstCharacter = nameCompany.charAt(0).toUpperCase();
// Second character to next all to lower case
const allCharacters = nameCompany.slice(1, nameCompany.length).toLowerCase();
// Join first characters and other characters
const finalname = firstCharacter.concat(allCharacters);
// Check if it exit in an array.
const isCompanies = itCompanies.includes(finalname);

if (isCompanies) {
	console.log(`${finalname} is found in Array`);
} else {
	console.log(`This item \'${nameCompany}\' is not found in Array`);
}

console.log("~~~~~~~~~~~~~~~");
// Filter out companies which have more than one 'o' without the filter method
//
const zero = itCompanies[0].match(/o/gi);
const one = itCompanies[1].match(/o/gi);
const two = itCompanies[2].match(/o/gi);
const three = itCompanies[3].match(/o/gi);
const four = itCompanies[4].match(/o/gi);
const five = itCompanies[5].match(/o/gi);
const six = itCompanies[companiesLen - 1].match(/o/gi);

if (zero && zero.length > 1) {
		console.log(`This has ${zero.length} \'o\'`)
		console.log(`${itCompanies[0]}`);
		console.log('***')
}
if (one && one.length > 1) {
		console.log(`This has ${one.length} \'o\'`)
		console.log(`${itCompanies[1]}`);
		console.log('***')
}
if (two && two.length > 1) {
		console.log(`This has ${two.length} \'o\'`)
		console.log(`${itCompanies[2]}`);
		console.log('***')
}
if (three && three.length > 1) {
		console.log(`This has ${three.length} \'o\'`)
		console.log(`${itCompanies[3]}`);
		console.log('***')
}
if (four && four.length > 1) {
		console.log(`This has ${four.length} \'o\'`)
		console.log(`${itCompanies[4]}`);
		console.log('***')
}
if (five && five.length > 1) {
		console.log(`This has ${five.length} \'o\'`)
		console.log(`${itCompanies[5]}`);
		console.log('***')
}
if (six && six.length > 1) {
		console.log(`This has ${six.length} \'o\'`)
		console.log(`${itCompanies[6]}`);
		console.log('***')
}

console.log("~~~~~~~~~~~~~~~");

// Sort the array
const sortCompanies = itCompanies.sort();
console.log("Sort Array");
console.log(sortCompanies);

console.log("~~~~~~~~~~~~~~~");

// Reverse the array
const reverseCompany = itCompanies.reverse();
console.log("Reverse Array");
console.log(reverseCompany);

console.log("~~~~~~~~~~~~~~~");

// Slice out the first 3 companies from the array
const middleCompany = itCompanies[Math.floor(companiesLen / 2)];
//
//console.log(itCompanies)

const firstThree = itCompanies.slice(0, 3);
console.log("The first 3 companies");
console.log(firstThree);

console.log("##");
// Slice out the last 3 companies from the array

const coLen = itCompanies.length;
const lastThree = itCompanies.slice(coLen - 3, coLen);

console.log("The last 3 companies");
console.log(lastThree);

console.log("##");
// Slice out the middle IT company or companies from the array
const notFloor = Math.floor(coLen / 2);

if (companiesLen === 2) {
	console.log("There is not middle");
} else {
	let oneItemMiddle;
	let twoItemsMiddle;
	if (itCompanies.length % 2 === 0) {
		// 2 item in medium
		twoItemsMiddle = itCompanies.slice(
			Math.floor(itCompanies.length) / 2 - 1,
			Math.floor(itCompanies.length) / 2 + 1
		);
		console.log("2 items medium in array");
		console.log(twoItemsMiddle);
	} else {
		// companiesLen % 2 === 1;
		//
		oneItemMiddle = itCompanies.splice(notFloor, 1);
		console.log("1 item medium in array");
		console.log(oneItemMiddle);
	}
}

console.log("~~~~~~~~~~~~~~~");

// Remove the first IT company from the array
//
console.log("Array original");
console.log(itCompanies);

const deleteFirstItem = itCompanies.shift();

console.log(`First removed -> ${deleteFirstItem}`);
console.log(itCompanies);

console.log("~~~~~~~~~~~~~~~");
// Remove the middle IT company or companies from the array
//

console.log("###");
console.log("Array again here");
console.log(itCompanies);
console.log(`This array has ${itCompanies.length} lengths`);
console.log("###");

if (companiesLen === 2) {
	console.log("There is not middle");
} else {
	let deleteMiddle;
	if (itCompanies.length % 2 === 0) {
		// remove 1 item in medium

		deleteMiddle = itCompanies.splice(
			Math.floor(itCompanies.length) / 2 - 1,
			2
		);
		console.log("~~~~~~~~~~~~~~~");
		console.log(`Removed 2 items medium in array`);
		console.log(`Removed -> ${deleteMiddle}`);
		console.log("Array now");
		console.log(itCompanies);
	} else {
		console.log("~~~~~~~~~~~~~~~");
		// companiesLen % 2 === 0;
		//
		deleteMiddle = itCompanies.splice(notFloor, 1);
		console.log("Removed 1 item medium in array");
		console.log(`Removed -> ${deleteMiddle}`);
		console.log("Arrow now");
		console.log(itCompanies);
	}
}

console.log("~~~~~~~~~~~~~~~");
const deleteLastItem = itCompanies.pop();

console.log(`Removed last item -> ${deleteLastItem}`);
console.log("Array now");
console.log(itCompanies);

console.log("~~~~~~~~~~~~~~~");
// Remove all IT companies
const deleteAllArray = itCompanies.splice();
console.log("Removed All");
console.log(deleteAllArray);
