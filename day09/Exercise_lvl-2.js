const { countries } = require("./countries");

//const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
	{ product: "banana", price: 3 },
	{ product: "mango", price: 6 },
	{ product: "potato", price: " 		" },
	{ product: "potato", price: "	" },
	{ product: "avocado", price: 8 },
	{ product: "coffee", price: 10 },
	{ product: "tea", price: "" },
	{ product: "test", price: undefined },
	{ product: "test", price: null },
	{ product: "test", price: "Hello" }
];
console.log("~~~~~~~~~~~~~~~");
// Question 1
// Find the total price of products by chaining two or more array iterators
// (eg. arr.map(callback).filter(callback).reduce(callback))
//
const totalPrice = elements => {
	const sum = elements
		// only numbers or prices and not a whitespace
		// .test() return true or false
		// true -> add
		// false -> doesn't add
		// dont undefined not null not string
		.filter(elem => /^\S+$/.test(elem.price) && elem.price && Number.isInteger(elem.price))
		// Only price -> return an array
		.map(elem => elem.price)
		// Sum all
		.reduce((acc, cur) => acc + cur);
	//
	console.log(`Total price of products: ${sum}`);
};
totalPrice(products);
console.log("~~~~~~~~~~~~~~~");
// Question 2
// Find the sum of price of products using only reduce reduce(callback))
//
const sumPrice = elements => {
	//
	let initialValue = 0;
	//
	const sum = elements.reduce((acc, cur) => {
		//
		// whitespace does not allowed for add like numbers
		const regex = /^\S+$/;

		// return true or false
		const isSpace = regex.test(cur.price);

		// check it if the price is a number
		// return true or false
		const isNumber = Number.isInteger(cur.price);

		// DONT SPACE, not null not undefined or string
		if (isSpace && cur.price && isNumber) {
			return acc + cur.price;
		}
		return acc;
		//
		// if the product is an array of objects and it must supply an initialValue here
	}, initialValue);

	console.log(`Total price of products: ${sum}`);
};
sumPrice(products);
console.log("~~~~~~~~~~~~~~~");
// Question 3
// Declare a function called categorizeCountries which returns an array of countries
// which have some common pattern.
// (you find the countries array in this repository as countries.js (eg 'land', 'ia', 'island','stan')).
//
const categorizeCountries = (countries, wordShort) => {
	// undefined null
	if (!wordShort){
		return false
	}
	console.log(`Match => ${wordShort}`)
	// Matches a word
	const countryLan = countries.filter(elem => {
		// length to match last word
		const wordLen = wordShort.length;

		// length of a country
		const elemLen = elem.length;

		// Example
		//
		// "Sebastian" -> This has 9 letters
		//
		// If i want to match 'ian' at end of a word
		// 'ian' -> this has 3 letters
		//
		// "Sebastian" - "ian" -> "Sebast"
		//	9 - 3 = 6   
		//
		// elem.slice(first position, end position);
		//
		// elem.slice(9 - 3, 9) -> "ian"
		//
		const match = elem.slice(elemLen - wordLen, elemLen);

		// all lower case: "AbC" => "abc"
		if (match.toLowerCase() === wordShort.toLowerCase()){
			return elem
		}
	});
//	const countryLan = countries.filter(elem => elem.includes(wordShort));

	console.log(countryLan);
}
categorizeCountries(countries, "land");
categorizeCountries(countries, "ia");
categorizeCountries(countries, "stan");
categorizeCountries(countries, null)

console.log("~~~~~~~~~~~~~~~");
// Question 4
// Create a function which return an array of objects, which is the letter and
// the number of times the letter use to start with a name of a country.
//
console.log("~~~~~~~~~~~~~~~");
// Question 5
// Declare a getFirstTenCountries function and return an array of ten countries.
// Use different functional programming to work on the countries.js array
//
console.log("~~~~~~~~~~~~~~~");
// Question 6
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
//
console.log("~~~~~~~~~~~~~~~");
// Question 7
// Find out which letter is used many times as initial for a country name from the countries array
// (eg. Finland, Fiji, France etc)
