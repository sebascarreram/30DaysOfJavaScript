const fetch = require("node-fetch");

const countriesAPI = "https://restcountries.eu/rest/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Read the cats api and find the average weight of cat in metric unit
//
const catWeight = async () => {
	try {
		const urlCat = await fetch(catsAPI);
		const cats = await urlCat.json();

		const nbr = [];

		const strToNbr = cats.map(el => {
			// First: Converting Object to Array with split method
			// { weight: '1 - 3' } => [ '1', '3' ];
			const objToArray = el.weight.metric.split(" - ");

			// Second: Converting String to Number
			// [ '1', '3' ] => [ 1, 3 ]
			const strToNbr = objToArray.map(la => parseInt(la));

			// Third: Sum each array:
			// [ 4, 8 ] => [ 12 ]
			const ab = strToNbr.reduce((ac, cur) => ac + cur);

			// Fourth: divide by 2
			// [ 12 / 2 ]
			const ac = ab / 2;

			// Fifth: To push to nbr Array
			return nbr.push(ac);
		});

		// Sum on each element of the array
		const reducer = nbr.reduce((acc, cur) => acc + cur);

		// Returns the value of x rounded to its nearest integer:
		//  4.7 -> 5
		//  4.4 -> 4
		const onlyInt = Math.round(reducer);

		// Length of nbr array
		const reducerLen = nbr.length;

		const total = onlyInt / reducerLen;

		const txt = `The average weight of cat in metric unit => ${total.toFixed(
			2
		)}`;
		console.log(txt);
	} catch (err) {
		console.log(err);
	}
};
// catWeight();
//
//
// Read the countries api and find out the 10 largest countries
//
const countriesLargest = async () => {
	try {
		const urlContries = await fetch(countriesAPI);
		const countries = await urlContries.json();
		//console.log(countries);

		// Sort by area
		countries.sort((a, b) => b.area - a.area, 0);

		// Extrating only 10
		const onlyTen = countries.splice(0, 10);
		
		// FINAL
		onlyTen.forEach((la, index) => {
			console.log(`${index}: ${la.name} => area: ${la.area}`)

		})		

	} catch (err) {
		console.log(err);
	}
};
//countriesLargest();
//
//
// Read the countries api and count total number of languages in the world used as officials.
//
const lanCount = async () => {
	try {
		const urlContries = await fetch(countriesAPI);
		const countries = await urlContries.json();

		// Sort by lenght of languages
		countries.sort((a, b) => b.languages.length - a.languages.length, 0);

		//
		const numbers = [];

		countries.forEach(el => {
			// print only name and lenght of languages
			console.log({
				name: el.name,
				languages: el.languages.length
			})
			// to push lengh of languages to array for sum final like reduce() method
			numbers.push(el.languages.length);
		})
		const redu = numbers.reduce((acc, cur) => acc + cur);

		console.log(`Total number of languages in the world => ${redu}`)

	} catch (err) {
		console.log(err);
	}
}
//lanCount();
