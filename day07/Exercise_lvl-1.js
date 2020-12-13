console.log("~~~~~~~~~~~~");
// Question 1
// Declare a function fullName and it print out your full name.
const fullName = () => {
	let firstName = "Sebastian";
	let lastname = "Carrera";
	return `Full name: ${firstName} ${lastname}`;
};

console.log(fullName());
console.log("~~~~~~~~~~~~");
// Question 2
// Declare a function fullName and now it takes firstName, lastName as a parameter
// and it returns your full - name.

const fullNamePara = (firstName, lastName) => {
	return `Full name: ${firstName} ${lastName}`;
};

console.log(fullNamePara("Sebastian", "Carrera"));

console.log("~~~~~~~~~~~~");
// Question 3
// Declare a function addNumbers and it takes two two parameters and it returns sum.
//
// With return
const addNumbers = (num1, num2) => {
	return `${num1} + ${num2}: ${num1 + num2}`;
};

// Without return and a single line
const addNumbers1 = (num1, num2) => `${num1} + ${num2}: ${num1 + num2}`;

console.log(addNumbers(4, 4));
console.log(addNumbers1(3, 4));

console.log("~~~~~~~~~~~~");
// Question 4
// An area of a rectangle is calculated as follows: area = length x width.
// Write a function which calculates areaOfRectangle.
//

const areaOfRectangle = (len, wid) => {
	let sum = len * wid;
	return `Area of rectangle: length: ${len} * width: ${wid} => ${sum}`;
};

console.log(areaOfRectangle(4, 2));
console.log("~~~~~~~~~~~~");
// Question 5
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
// Write a function which calculates perimeterOfRectangle.
//
const perimeterOfRectangle = (len, wid) => {
	const peri = 2 * (len + wid);
	return `Perimeter of a rectangle: 2x(${len} + ${wid}) => ${peri}`;
};

console.log(perimeterOfRectangle(4, 2));
console.log("~~~~~~~~~~~~");
// Question 6
// A volume of a rectangular prism is calculated as follows: volume = length x width x height.
// Write a function which calculates volumeOfRectPrism.
//
const volumeOfRectPrism = (len, wid, hei) => {
	const vol = len * wid * hei;
	return `Volume of a rectangular: voleme = ${len} x ${wid} x ${hei} => ${vol}`;
};

console.log(volumeOfRectPrism(2, 3, 4));
console.log("~~~~~~~~~~~~");
// Question 7
// Area of a circle is calculated as follows: area = __ x r x r.
// Write a function which calculates areaOfCircle
const areaOfCircle = r => {
	//const area = Math.floor(Math.PI) * r * r;
	const area = Math.PI * r * r;
	return `Area of circle: PI x ${r} x ${r} => ${area}`;
};
console.log(areaOfCircle(3));
console.log("~~~~~~~~~~~~");
// Question 8
// Circumference of a circle is calculated as follows: circumference = 2__r.
// Write a function which calculates circumOfCircle
//
const circumOfCircle = r => {
	return `circumference of a circle: 2 x PI x ${r} => ${2 * Math.PI * r}`;
};

console.log(circumOfCircle(3));
console.log("~~~~~~~~~~~~");
// Question 9
// Density of a substance is calculated as follows:density= mass/volume.
// Write a function which calculates density.
//
const densityOfSubstance = (mass, volu) => {
	const density = mass / volu;

	return `Density of a substance: density= ${mass} / ${volu} => ${density}`;
};
console.log(densityOfSubstance(3, 4));
console.log("~~~~~~~~~~~~");
// Question 10
// Speed is calculated by dividing the total distance covered by a moving object
// divided by the total amount of time taken. Write a function which calculates a
// speed of a moving object, speed.
//
const calculateSpeed = (distance, time) => {
	//
	// kilometers per hour
	const kmHour = (distance / time) * 3600;

	// kilometers per minute
	const kmMin = (distance / time) * 60;

	// kilometers per second
	const kmSeg = distance / time;

	// Kilometers to meters
//	const toMeter = distance * 1000;

	// meters per hour
	const meHrs = kmHour * 1000;
	// meters per minute
	const meMin = kmMin * 1000;
	// meters per segond
	const meSeg = kmSeg * 1000;

	console.log(`Distance: ${distance}km`);
	console.log(`Time: ${time}s`);

	console.log(`Your speed is ${kmHour} km/h`);
	console.log(`Your speed is ${kmMin} km/m`);
	console.log(`Your speed is ${kmSeg} km/s`);

	console.log(`Your speed is ${meHrs} m/h`);
	console.log(`Your speed is ${meMin} m/m`);
	console.log(`Your speed is ${meSeg} m/s`);
};
// Try total km and total seg
calculateSpeed(15, 1);
console.log("~~~~~~~~~~~~");
// Question 11
// Weight of a substance is calculated as follows: weight = mass x gravity.
// Write a function which calculates weight.
//
const weightOfSubstance = mass => {
	const weight = mass * 9.8;

	return `Weight of a substance: weight = ${mass} x 9,8 => ${weight}`;
};
console.log(weightOfSubstance(4));
console.log("~~~~~~~~~~~~");
// Question 12
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelciusToFahrenheit.
//
const convertCelciusToFahrenheit = oc => {
	const celcius = (oc * 9) / 5 + 32;

	return `Your ${oc} celcius is converting to Fahrenheit => ${celcius}F`;
};
console.log(convertCelciusToFahrenheit(3));
console.log("~~~~~~~~~~~~");
// Question 13
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi.
// BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
//
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more
//
const calculateBMI = (weight, height) => {
	// cm to m
	const heiDec = height / 100;
	// Calculate BMI
	const bmi = weight / (heiDec * heiDec);

	// With two decimals
	// Note: toFixed() -> convert a number into String
	const tf = bmi.toFixed(2);

	// String to Float
	const numb = parseFloat(tf);

	// It's lees than 18.5
	if (numb < 18.5) {
		return `Your BMI ${numb} => Underweight`;
		// Between 18.5 and 24.99
	} else if (numb >= 18.5 && numb <= 24.99) {
		return `Your BMI ${numb} => Normal weight`;
		// Between 25 and 29.99
	} else if (numb >= 25 && numb <= 29.99) {
		return `Your BMI ${numb} => Overweight`;
		// Between 30 and 34.99
	} else if (numb >= 30 && numb <= 34.99) {
		return `Your BMI ${numb} => Obese`;
	} else {
		// It's 30 or more
		return `Your BMI ${numb} => Extremly obese`;
	}
};

// weight, height
console.log(calculateBMI(48, 169));
console.log("~~~~~~~~~~~~");
// Question 14
// Write a function called checkSeason,
// it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
//
const checkSeason = month => {
	// convert all to lowerCase
	const toLower = month.toLowerCase();

	if (
		toLower === "december" ||
		toLower === "january" ||
		toLower === "february"
	) {
		return `Your month ${toLower} is Winter`;
	} else if (toLower === "march" || toLower === "april" || toLower === "may") {
		return `Your month ${toLower} is Spring`;
	} else if (toLower === "june" || toLower === "july" || toLower === "august") {
		return `Your month ${toLower} is Summer`;
	} else if (
		toLower === "september" ||
		(toLower === "octuber") === "november"
	) {
		return `Your month ${toLower} is Autumn`;
	} else {
		return `Your ${toLower} is not month, try late again`;
	}
};

console.log(checkSeason("April"));
console.log("~~~~~~~~~~~~");
// Question 15
// Math.max returns its largest argument.
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
//
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
//
const findMax = (a, b, c) => {
	// Check it if these variables are numbers or not
	if (typeof a !== "string" && typeof b !== "string" && typeof c !== "string") {
		// Max method
		const isMax = Math.max(a, b, c);
		// Return
		return `Number max is ${isMax}`;
	} else {
		// FAIL. It's not a number !
		return "Please, try only number";
	}
};

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

console.log("~~~~~~~~~~~~");
