const countries = [
	"Albania",
	"Bolivia",
	"Canada",
	"Denmark",
	"Ethiopia",
	"Finland",
	"Germany",
	"Hungary",
	"Ireland",
	"Japan",
	"Kenya"
];

const webTechs = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Redux",
	"Node",
	"MongoDB"
];

console.log("~~~~~~~~~~~~~~~~~~");
// Question 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// Question 3
const numbersLen = numbers.length;

console.log(`The size of the array: ${numbersLen}`);

console.log("~~~~~~~~~~~~~~~~~~");
// Question 4
// Get the first item, the middle item and the last item of the array
//
const firstItem = numbers[0];
const middleItem = numbers[Math.floor(numbersLen / 2)];
const lastItem = numbers[numbersLen - 1];

console.log(
	`First item: ${firstItem} || Middle item: ${middleItem} || Last item: ${lastItem}`
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
const companiesLen = itCompanies.length;
console.log(companiesLen);

const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(companiesLen / 2)];
const lastCompany = itCompanies[companiesLen - 1];

console.log(
	`First company: ${firstCompany} || Middle company: ${middleCompany} || Last company: ${lastCompany}`
);

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

// Filter out companies which have more than one 'o' without the filter method
//
// Missing here
//

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
//
//console.log(itCompanies)

const firstThree = itCompanies.slice(0, 3);
console.log("The first 3 companies");
console.log(firstThree);

// Slice out the last 3 companies from the array
//

const coLen = itCompanies.length;
const lastThree = itCompanies.slice(coLen - 3, coLen);

console.log("The last 3 companies");
console.log(lastThree);

// Slice out the middle company
const notFloor = Math.floor(coLen / 2);
console.log("The middle company");
console.log(itCompanies[notFloor]);

console.log("~~~~~~~~~~~~~~~");

// Remove the first IT company from the array
//
console.log("Array original");
console.log(itCompanies);

const deleteFirstItem = itCompanies.shift();

console.log("First array is Removed");
console.log(itCompanies);

console.log("~~~~~~~~~~~~~~~");
// Remove the middle IT company or companies from the array
//

const deleteMiddle = itCompanies.splice(notFloor, 1);
console.log("Removed middle array");
console.log(deleteMiddle);

//
//
console.log("~~~~~~~~~~~~~~~");
// Remove the last IT company from the array
console.log("Array original");
console.log(itCompanies);

console.log("~~~~~~~~~~~~~~~");
const deleteLastItem = itCompanies.pop();

console.log("Last array is Removed");
console.log(itCompanies);

console.log("~~~~~~~~~~~~~~~");
// Remove all IT companies
const deleteAllArray = itCompanies.splice();
console.log("Removed All");
console.log(deleteAllArray);
