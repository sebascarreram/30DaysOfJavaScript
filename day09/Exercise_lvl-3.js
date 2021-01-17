const { countriesData } = require("./countries_data");

const countries = [
	{
		country: "United State Of America",
		capital: "Washington, D.C.",
		population: "332050976"
	},
	{ country: "Greenland", capital: "Nuuk", population: "56823" },
	{ country: "Colombia", capital: "Bogota", population: "51178000" },
	{ country: "Canada", capital: "Ottawa", population: "37921695" },
	{ country: "Vietnam", capital: "Hahoi", population: "97338579" },
	{ country: "Spain", capital: "Madrid", population: "46754778" }
];

const countriesLanguages = [
	// count = millones
	{ country: "English", count: 1268 },
	{ country: "French", count: 277 },
	{ country: "Arabic", count: 274 },
	{ country: "Spanish", count: 538 },
	{ country: "Japanese", count: 126 },
	{ country: "Marathi", count: 95 },
	{ country: "Hindi", count: 637 },
	{ country: "Russian", count: 258 },
	{ country: "Bengali", count: 265 },
	{ country: "Portuguese", count: 252 },
	{ country: "Dutch", count: 24 },
	{ country: "German", count: 132 },
	{ country: "Mandarin Chinese", count: 1120 },
	{ country: "Swahili", count: 99 }
];
console.log("List of countries");
console.log(countries);
console.log("~~~~~~~~~~~~~~~");
// Question 1
// Use the countries information, in the data folder. Sort countries by name, by capital, by population
//
// Copy array
const copyCountries = [...countries];

const infoCountries = elements => {
	// sort by country name
	const countriesAsce = elements.sort(function (a, b) {
		let nameA = a.country.toUpperCase(); // ignore upper and lowercase
		let nameB = b.country.toUpperCase(); // ignore upper and lowercase

		// a is less than b by some ordering criterion
		if (nameA < nameB) {
			return -1;
		}
		// a is greater than b by the ordering criterion
		if (nameA > nameB) {
			return 1;
		}

		// a must be equal to b
		return 0;
	});
	console.log(countriesAsce);
};
infoCountries(copyCountries);
console.log("~~~~~~~~~~~~~~~");
// Question 2
// *** Find the 10 most spoken languages:
//
// Your output should look like this
//
// console.log(mostSpokenLanguages(countries, 10))
// [
//  { country: 'English', count: 91 },
//  { country: 'French', count: 45 },
//  { country: 'Arabic', count: 25 },
//  { country: 'Spanish', count: 24 },
//  { country: 'Russian', count: 9 },
//  { country: 'Portuguese', count: 9 },
//  { country: 'Dutch', count: 8 },
//  { country: 'German', count: 7 },
//  { country: 'Chinese', count: 5 },
//  { country: 'Swahili', count: 4 }
// ]

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// 	{ country: 'English', count: 91 },
// 	{ country: 'French', count: 45 },
// 	{ country: 'Arabic', count: 25 },
// ]
//
const copyLanguage = [...countriesLanguages];

const mostSpokenLanguages = (elements, nbr) => {
	const countryLen = elements.length;
	//
	if (nbr >= countryLen) {
		console.log(`Try only these numbers 0 - ${countryLen}`);
		return;
	}
	// Sort by count
	elements.sort((a, b) => b.count - a.count);

	//
	const nbrArray = elements.filter((elem, index) => {
		if (index < nbr) {
			return elem;
		}
	});
	console.log(`the ${nbr} most spoken languages`);
	console.log(nbrArray);
};
mostSpokenLanguages(copyLanguage, 6);
console.log("~~~~~~~~~~~~~~~");
// Question 3
// *** Use countries_data.js file create a function which create the ten most populated countries
//
// [
//  {country: 'China', population: 1377422166},
//  {country: 'India', population: 1295210000},
//  {country: 'United States of America', population: 323947000},
//  {country: 'Indonesia', population: 258705000},
//  {country: 'Brazil', population: 206135893},
//  {country: 'Pakistan', population: 194125062},
//  {country: 'Nigeria', population: 186988000},
//  {country: 'Bangladesh', population: 161006790},
//  {country: 'Russian Federation', population: 146599183},
//  {country: 'Japan', population: 126960000}
// ]
//
// console.log(mostPopulatedCountries(countries, 3))
// [
//  {country: 'China', population: 1377422166},
//  {country: 'India', population: 1295210000},
//  {country: 'United States of America', population: 323947000}
// ]
//
//
// Copy array because sort() method will change the original SO i don't want to change
const countryCopy = [...countriesData];

const mostPopulatedCountries = (elements, len) => {
	// Sort by population
	elements.sort((a, b) => b.population - a.population);

	// print until n
	const print = elements.filter((elem, index) => {
		if (index < len) {
			return elem;
		}
	});
	console.log(`The ${len} most spoken languages`);
	return print;
};

console.log(mostPopulatedCountries(countryCopy, 3));
console.log("~~~~~~~~~~~~~~~");
// Question 4
// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and
// measure of variability(range, variance, standard deviation).
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
// You can create an object called statistics and create all the functions which do statistical calculations as
// method for the statistics object. Check the output below.
//

const ages = [
	31,
	26,
	34,
	37,
	27,
	26,
	32,
	32,
	26,
	27,
	27,
	24,
	32,
	33,
	27,
	25,
	26,
	38,
	37,
	31,
	34,
	24,
	33,
	29,
	26
];
//
// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist())
//	[
//  	(20.0, 26),
//  	(16.0, 27),
//  	(12.0, 32),
//  	(8.0, 37),
//  	(8.0, 34),
//  	(8.0, 33),
//  	(8.0, 31),
//  	(8.0, 24),
//  	(4.0, 38),
//  	(4.0, 29),
//		(4.0, 25)
//	]
//
const copyNbr = [...ages];

const statistics = {
	// [ 1, 1, 2, 3, 3 ] => [ 1, 2, 3 ];
	notRepeat: function (nnumbers) {

		const newArray = [];
		nnumbers.forEach(el => {
			const isFound = newArray.find(elem => elem === el);

			if (isFound) {
				return el;
			} else {
				newArray.push(el);
			}
		});
		//const sum = newArray.reduce((acc, cur) => acc + cur, 0);
		return this.ascending(newArray);
	},
	ascending: function (numbers) {
		return numbers.sort((a, b) => a - b);
	},
	descending: function (numbers) {
		return numbers.sort((a, b) => b - a);
	},
	count: function () {
		let nbr = 0;
		ages.forEach(() => nbr++);
		// or const agesLen = ages.length;
		return nbr;
	},
	sum: function () {
		const sum = ages.reduce((acc, curr) => acc + curr);
		return sum;
	},
	min: function () {
		copyNbr.sort((a, b) => a - b);
		return copyNbr[0];
	},
	max: function () {
		copyNbr.sort((a, b) => b - a);
		return copyNbr[0];
	},
	range: function () {
		return this.max() - this.min();
	},
	mean: function () {
		return Math.round(this.sum() / this.count());
	},
	median: function () {
		return copyNbr[Math.floor(this.count() / 2)];
	},
	mode: function (numbers) {
		// sort by numbers
		// [ 8, 8, 2, 1 ] -> [1 , 2, 8, 8];
		this.ascending(numbers);
		// numbers.sort((a, b) => a - b);

		// arrNumber -> numbers not REPEAT

		// final -> { mode: x, count: x };
		const countNumbers = [];

		this.notRepeat(numbers).forEach(elem => {
			let count = 0;
			numbers.forEach(el => {
				if (elem === el) {
					count++;
				}
			});
			countNumbers.push({ mode: elem, count: count });
		});

		// sort by numbers again
		countNumbers.sort((a, b) => b.count - a.count);

		// check it if there are more than one Mode
		let result = countNumbers.filter(
			elem => countNumbers[0].count === elem.count
		);

		return result;
	},
	variance: function () {
		const ac = copyNbr.map(elem => (elem - this.mean()) ** 2);
		const sum = ac.reduce((acc, curr) => acc + curr, 0);
		const n = this.count() - 1;
		const s = sum / n;
		return s.toFixed(2);
	},
	std: function () {
		return Math.sqrt(this.variance()).toFixed(2);
	},
	freqDist: function (numbers) {
		const countNumbers = [];

		this.notRepeat(numbers).forEach(age => {
			let count = 0;
			numbers.forEach(el => {
				if (age === el) {
					count++;
				}
			});
			countNumbers.push({ age, count });
		});
		// sort by count numbers
		countNumbers.sort((a, b) => b.count - a.count);

		// 25
		const sum = countNumbers.reduce((acc, cur) => acc + cur.count, 0);

		//
		const a = countNumbers.map(el => (el.count / sum) * 100);

		// all percentage numbers
		const sumPercent = a.reduce((acc, cur) => acc + cur, 0);

	//	const laa = []

	//	countNumbers.forEach(el => {
	//		const perce = (el.count / sum) * 100;
	//
	//		laa.push({ perce});

	//	})

		const fin = countNumbers.map(
			el => `age: ${el.age}, percent: ${(el.count / sum) * 100}% *`
			//el => el.age, laa  
		);

		return fin;
	},
	describe: function (numbers) {
		return `Numbers not repeat: ${this.notRepeat(numbers)}\nCount: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRange: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nMode: ${this.mode(numbers)}\nVariance: ${this.variance()}\nStandard Deviation: ${this.std()}\nFrequency Distribution: ${this.freqDist(numbers)}`;
	}
};

console.log("Numbers not repeat: ", statistics.notRepeat(copyNbr));
console.log("Count: ", statistics.count());
console.log("Sum: ", statistics.sum());
console.log("Min: ", statistics.min());
console.log("Max: ", statistics.max());
console.log("Range: ", statistics.range());
console.log("Mean: ", statistics.mean());
console.log("Median: ", statistics.median());
console.log("Mode: ", statistics.mode(copyNbr));
console.log("Variance: ", statistics.variance());
console.log("Standard Deviation: ", statistics.std());
console.log("Frequency Distribution: ", statistics.freqDist(copyNbr));
console.log("############");
console.log("############");
console.log("Full describe: ");
console.log(statistics.describe(copyNbr));
console.log("~~~~~~~~~~~~~~~");
