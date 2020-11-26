console.log("~~~~~~~~~~~~~~~~");
// Question 1
// Write a code which can give grades to students according to theirs scores:
// 80-100,	A
// 70-79,		B
// 60-69,		C
// 50-59,		D
// 0-49,		F
//
const scores = +99;

if (scores >= 80 && scores <= 100) {
	console.log("A");
} else if (scores >= 70 && scores <= 79) {
	console.log("B");
} else if (scores >= 60 && scores <= 69) {
	console.log("C");
} else if (scores >= 50 && scores <= 59) {
	console.log("D");
} else if (scores >= 0 && scores < 50) {
	console.log("F");
} else {
	console.log(
		"This number is not score, only between 100 - 0. Try again later"
	);
}

console.log("~~~~~~~~~~~~~~~~");
// Question 2
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
//
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
//

const season = "OctoBer";

// Remove space
const seasonTrim = season.trim();

// First character to UpperCase
const firstCharacter = season.charAt(0).toUpperCase();

// Second character to all to lowerCase
const seasonLower = season.slice(1, season.length).toLowerCase();

// Join First character and all character after converter to lowerCase
const finalSeason = firstCharacter.concat(seasonLower);

if (
	finalSeason === "September" ||
	finalSeason === "October" ||
	finalSeason === "November"
) {
	console.log(`Season ${finalSeason} is Autumn.`);
} else if (
	finalSeason === "December" ||
	finalSeason === "January" ||
	finalSeason === "February"
) {
	console.log(`Season ${finalSeason} is Winter`);
} else if (
	finalSeason === "March" ||
	finalSeason === "April" ||
	finalSeason === "May"
) {
	console.log(`Season ${finalSeason} is Spring`);
} else if (
	finalSeason === "June" ||
	finalSeason === "July" ||
	finalSeason === "August"
) {
	console.log(`Season ${finalSeason} is Summer`);
} else {
	console.log("This is not a season, try later again.");
}

console.log("~~~~~~~~~~~~~~~~");
// Question 3
// Check if a day is weekend day or a working day. Your script will take day as an input.
//

const dayToday = "friDaysasd";

// Remove space
const dayTrim = dayToday.trim();

// First character to UpperCase
const firstCharacter1 = dayToday.charAt(0).toUpperCase();

// Second character to all to lowerCase
const dayLower = dayToday.slice(1, dayToday.length).toLowerCase();

// Join First character and all character after converter to lowerCase
const finalDay = firstCharacter1.concat(dayLower);

if (
	finalDay === "Monday" ||
	finalDay === "Tuesday" ||
	finalDay === "Wednesday" ||
	finalDay === "Thursday" ||
	finalDay === "Friday"
) {
	console.log(`${finalDay} is a working day`);
} else if (finalDay === "Saturday" || finalDay === "Sunday") {
	console.log(`${finalDay} is a weekend`);
} else {
	console.log(`This \'${finalDay}\' is not day, try again later`);
}

console.log("~~~~~~~~~~~~~~~~");
