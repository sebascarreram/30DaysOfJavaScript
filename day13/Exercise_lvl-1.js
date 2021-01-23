// Question 1
// Display the countries array as a table
//
const countries = [
	"Colombia",
	"USA",
	"UK",
	"Canada"
];
console.table(countries)

console.log("~~~~~~~~~~~~");
// Question 2
// Display the countries object as a table
//
const country = {
	name: "Colombia",
	capital: "Bogota",
	language: "Spanish"
}
console.table(country)

console.log("~~~~~~~~~~~~");

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("My country");
console.log(country);
console.groupEnd()
