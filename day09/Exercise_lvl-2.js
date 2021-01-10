const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
	{ product: "banana", price: 3 },
	{ product: "mango", price: 6 },
	{ product: "potato", price: " " },
	{ product: "avocado", price: 8 },
	{ product: "coffee", price: 10 },
	{ product: "tea", price: "" }
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
		.filter(elem => /^\S+$/.test(elem.price))
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

console.log("~~~~~~~~~~~~~~~");
// Question 3
// Declare a function called categorizeCountries which returns an array of countries
// which have some common pattern(you find the countries array in this repository as
// countries.js(eg 'land', 'ia', 'island','stan')).
//
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
