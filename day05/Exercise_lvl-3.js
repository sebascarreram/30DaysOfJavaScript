const { countries } = require("./fullCountries");

console.log("~~~~~~~~~~~~~~~");
// Question 1
//
//
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 30];
console.log("Ages");
console.log(ages);
// Sort the array and find the min and max age
//
const ageSort = ages.sort();
const ageLen = ageSort.length;
console.log(`The size of the array: ${ageLen}`);

console.log("Ages sort");
console.log(ageSort);
const ageMin = ageSort[0];
const ageMax = ageSort[ageLen - 1];

console.log(`min: ${ageMin} | max: ${ageMax}`);
console.log("#");

// Find the median age(one middle item or two middle items divided by two)
//

if (ageLen === 2) {
	// [ 1, 2 ];
	// So..
	console.log("There is not middle item");
} else {
	//
	let middleMiddle;
	// 5.5 -> 5
	const notFloor = Math.floor(ageLen / 2);
	//
	if (ageLen % 2 === 0) {
		//
		middleMiddle = ageSort.slice(notFloor - 1, notFloor + 1);
		console.log("There are two numbers in medium");
		console.log(middleMiddle);
		console.log("#");
	} else {
		//
		middleMiddle = ageSort.slice(notFloor, notFloor + 1);

		console.log("There is one number in medium");
		console.log(middleMiddle);
		console.log("#");
	}
}
//
// Find the range of the ages(max minus min)
//
const foundRange = ageMax - ageMin;
console.log(`Range of the ages: ${foundRange}`);
console.log("#");

// Compare the value of (min - average) and (max - average), use abs() method 1.
//
const valueMin = Math.abs(ageMin - ageLen / 2);
const valueMax = Math.abs(ageMax - ageLen / 2);

console.log(`valueMin without abs(): ${ageMin - foundRange}`);
console.log(`valueMax without abs(): ${ageMax - foundRange}`);
console.log("~");
console.log(`valueMin with abs(): ${valueMin}`);
console.log(`valueMax with abs(): ${valueMax}`);

console.log("~~~~~~~~~~~~~~~");
// Question 2
// Slice the first ten countries from the countries array
//
const countriesTen = countries.slice(0, 10);

console.log("The first ten countries");
console.log(countriesTen);
console.log(
	`The size of the first ten countries Array: ${countriesTen.length}`
);

console.log("~~~~~~~~~~~~~~~");
//
// Find the middle country(ies) in the countries array
//

const countriesLen = countries.length;
console.log(`The size of the countries Array: ${countriesLen} countries`);

console.log("~~~~~~~~~~~~~~~");

if (countriesLen === 2) {
	console.log("There is not item middle");
} else {
	//
	let middleCountry;

	// 5.5 -> 5
	const notFloor = Math.floor(countriesLen / 2);

	if (countriesLen % 2 === 0) {
		//
		middleCountry = countries.slice(notFloor - 1, notFloor + 1);
		console.log("There are two items middle");
		console.log(middleCountry);
		console.log("~~~~~~~");
	} else {
		//
		middleCountry = countries.slice(notFloor, notFloor + 1);
		// middleItem = countries[0]; -> it works
		console.log("There is one item middle");
		console.log(middleCountry);
		console.log("~~~~~~~");
	}
}

// Question
// Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half.
//
const middleCountries = countriesLen / 2;

if (middleCountries % 2 === 0) {
	console.log(`${middleCountries} is an even number`);
} else {
	console.log(`${middleCountries} is not an even number`);

	const isOn = true;

	console.log("Do you want to add a country more for an even number?");

	if (isOn) {
		countries.unshift("Other");
		console.log("##");
		console.log("Added 1 more");

		console.log(
			`${
				countries.length % 2 === 0
					? `It\'s an even number !`
					: `It\'s not an even number`
			}`
		);
	}
}
