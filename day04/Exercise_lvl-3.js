console.log("~~~~~~~~~~~~~~~~");
// Question 1
// Write a program which tells the number of days in a month
//
const date = new Date();

// const month = date.getMonth(); // Get the month as a number (0-11)

const yearNow = date.getFullYear(); // 2020
const month = "MAY";

// First character to upper Case
const firstCharacter = month.charAt(0).toUpperCase();

// Position 1 in fron of all characters to lower Case
const allCharacter = month.slice(1, month.length).toLowerCase();

const finalCharacters = firstCharacter.concat(allCharacter);

console.log(`Year: ${yearNow}`);

if (
	finalCharacters === "January" ||
	finalCharacters === "March" ||
	finalCharacters === "May" ||
	finalCharacters === "July" ||
	finalCharacters === "August" ||
	finalCharacters === "October" ||
	finalCharacters === "December"
) {
	console.log(`${finalCharacters} has 31 days`);
} else if (
	finalCharacters === "April" ||
	finalCharacters === "June" ||
	finalCharacters === "September" ||
	finalCharacters === "November"
) {
	console.log(`${finalCharacters} has 30 days`);
} else if (finalCharacters === "February") {
	// Check if year is a leap or not
	const isLeap = parseInt(yearNow / 4) === yearNow / 4;
	if (isLeap) {
		console.log(`${finalCharacters} has 29 days`);
	} else {
		console.log(`${finalCharacters} has 28 days`);
	}
} else {
	console.log(`This \'${finalCharacters}\' is not a month, try again later`);
}
