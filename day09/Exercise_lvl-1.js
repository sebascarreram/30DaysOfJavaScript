const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Question 1
// Explain the difference between forEach, map, filter, and reduce.
//
//	* forEach
//		Takes a callback function and run that callback function on each element of array one by one
//		
//		let numbers = [ 1, 2, 3 ];
//		numbers.forEach((elem, indez) => `#{elem} comes at ${index}`);
//
//		output:
//		1 comes at 0
//		2 comes at 1
//		3 comes at 3
//
//	For every element on the array we are calling a callback which gets element & its index provided by forEach.
//	Basically forEach works as a tradicional FOR LOOP LOOPING over the array and prodiving you array elements
//	to do operations on them.
//
//	* filter
//		whenever you have to filter an array JS inbuilt method to filter your array is the right choice to use.
//		filter let you provide a callback for every element and return a filtered array.
//		
//		the main difference between forEach and filter is that forEach just loop over the array and executes the
//		callback but filter executes the callback and check its return value. If the value is true element remains
//		in the resulting array but if the return value is false the element will be removed for the resulting array.
//
//		let numbers = [ 1, 2, 3 ];
//		const result = numbers.filter(elem => elem !== 2);
//
//		output:
//		[ 1, 3 ];
//
//	*	map
//		map like filter & forEach takes a callback and run it against every element on the array but whats makes
//		it uniques is it generate a new array based on your existing array.
//
//		let numbers = [ 1, 2, 3 ];
//		const result = numbers.map(elem => elem * 10);
//
//		output:
//		[ 10, 20, 30 ];
//
//		like filter, map also returns an array. The provided callback to map modifies the array elements and
//		save themn the NEW ARRAY upon completion that array get retunned as the numbers array.
//		
//	*	reduce
//		As the name already suggest reduce method of the array object is used to redice the array to ONE SINGLE VALUE.
//
//		For example if you have to add the elements of an array you can do something like this
//
//		let numbers = [ 1, 2, 3 ];
//		const result = numbers.reduce((sum, elem) => sum + elem);
//
//		reduce takes a callback. Inside this callback we get two arguments
//		The sum is last returned value of the reduce function.
//
//		For example, initially the sum value value will be 0 then when the callback runs on the first element it
//		will add the element to the sum and return that value.
//
//		On second iteration the sum value will be first elem + 0,
//		On third iteration it will be  0 + first elem + second elem
//
//		So that is how reduce works it reduces the array into ONE SINGLE VALUE and returns it upon completion.
//	
//	
console.log("~~~~~~~~~~~~~~~")
// Question 2
// Define a call function before you them in forEach, map, filter or reduce
//
const eg = [ 1, 2, 3 ];

const isfor = elements => {
	elements.forEach((elem, index) => console.log(`${elem} comes at ${index}`));
}
isfor(eg);
console.log("##");
const isMap = elements => {
	const arrayNew = elements.map(elem => elem * 10);
	console.log("Created a new array")
	console.log(arrayNew)
}
isMap(eg);
console.log("##");
const isFilter = elements => {
	const filteredArray = elements.filter(elem => elem !== 2);
	console.log("Filtered array");
	console.log(filteredArray);
}
isFilter(eg);
console.log("##");
const isReduce = elements => {
	console.log(elements);

	// Like sum += elem;
	const sum = elements.reduce((sum, elem) => sum + elem);
	console.log(sum);
}
isReduce(eg);
console.log("~~~~~~~~~~~~~~~")
// Question 3
// Use forEach to console.log each country in the countries array.
//
const forCountry = elements => {
	elements.forEach((elem, index) => console.log(`${index} => ${elem}`));
}
forCountry(countries)
console.log("~~~~~~~~~~~~~~~")
// Question 4
// Use forEach to console.log each name in the names array.
//
const forName = elements => {
	elements.forEach((elem, index) => console.log(`${index} => ${elem}`));
}
forName(names);
console.log("~~~~~~~~~~~~~~~")
// Question 5
// Use forEach to console.log each number in the numbers array.
//
const forNumber = elements => {
	elements.forEach((elem, index) => console.log(`${index} => ${elem}`));
}
forNumber(numbers);
console.log("~~~~~~~~~~~~~~~")
// Question 6
// Use map to create a new array by changing each country to uppercase in the countries array.
//
const countryUpperCase = elements => {
	const toUpper = elements.map(elem => elem.toUpperCase());
	console.log(toUpper)
}
countryUpperCase(countries);
console.log("~~~~~~~~~~~~~~~")
// Question 7
// Use map to create an array of countries length from countries array.
//
const countryLength = elements => {
	const elemLen = elements.map(elem => elem.length);
	console.log(elemLen);
}
countryLength(countries)
console.log("~~~~~~~~~~~~~~~")
// Question 8
// Use map to create a new array by changing each number to square in the numbers array
//
const square = elements => {
	console.log("Numbers")
	console.log(elements);
	console.log("Square down here");
	const numberSquare = elements.map(elem => elem * elem);
	console.log(numberSquare)
}
square(numbers)
console.log("~~~~~~~~~~~~~~~")
// Question 9
// Use map to change to each name to uppercase in the names array
//
const nameUpperCase = elements => {
	const name = elements.map(elem => elem.toUpperCase());
	console.log(name);
}
nameUpperCase(names);
console.log("~~~~~~~~~~~~~~~")
// Question 10
// Use map to map the products array to its corresponding prices.
//
const productsPrice = elements => {
	const price = elements.map(elem => elem.price);
	console.log(price);
}
productsPrice(products)
console.log("~~~~~~~~~~~~~~~")
// Question 11
// Use filter to filter out countries containing land.
//
const countryLan = elements => {
	console.log("Countries containing 'land'")
	const result = elements.filter(elem => elem.includes("land"));
	console.log(result);
}
countryLan(countries)
console.log("~~~~~~~~~~~~~~~")
// Question 12
// Use filter to filter out countries having six character.
//
const characterSix = elements => {
	console.log("Countries having six character")
	const result = elements.filter(elem => elem.length === 6);
	console.log(result)
}
characterSix(countries)
console.log("~~~~~~~~~~~~~~~")
// Question 13
// Use filter to filter out countries containing six letters and more in the country array.
//
const countrySixLetter = elements => {
	console.log("Countries containing six letters and more")
	const result = elements.filter(elem => elem.length > 6);
	console.log(result)
}
countrySixLetter(countries)
console.log("~~~~~~~~~~~~~~~")
// Question 14
// Use filter to filter out country start with 'E';
//
const countriesE = elements => {
	console.log("Countries start with 'E'");
  const result = elements.filter(elem => elem.slice(0, 1) === "E");
	if (result.length){
		console.log(result);
	} else {
		console.log("~")
		console.log("There are no countries with 'E'");
	}
}
countriesE(countries)
console.log("~~~~~~~~~~~~~~~")
// Question 15
// Use filter to filter out only prices with values.
//
console.log("~~~~~~~~~~~~~~~")
// Question 16
// Declare a function called getStringLists which takes an array as a parameter and
// then returns an array only with string items.
//
console.log("~~~~~~~~~~~~~~~")
// Question 17
// Use reduce to sum all the numbers in the numbers array.
//
console.log("~~~~~~~~~~~~~~~")
// Question 18
// Use reduce to concatenate all the countries and to produce this sentence:
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
//
console.log("~~~~~~~~~~~~~~~")
// Question 19
// Explain the difference between some and every
//
console.log("~~~~~~~~~~~~~~~")
// Question 20
// Use some to check if some names' length greater than seven in names array
//
console.log("~~~~~~~~~~~~~~~")
// Question 21
// Use every to check if all the countries contain the word land
//
console.log("~~~~~~~~~~~~~~~")
// Question 22
// Explain the difference between find and findIndex
//
console.log("~~~~~~~~~~~~~~~")
// Question 23
// Use find to find the first country containing only six letters in the countries array
//
console.log("~~~~~~~~~~~~~~~")
// Question 24
// Use findIndex to find the position of the first country containing only six letters in the countries array
//
console.log("~~~~~~~~~~~~~~~")
// Question 25
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
//
console.log("~~~~~~~~~~~~~~~")
// Question 26
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
//
