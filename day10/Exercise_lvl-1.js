// Question 1
// create an empty set
//
const testEmpty = new Set();
console.log(testEmpty.size);
console.log(testEmpty);
console.log("~~~~~~~~~~~~~~~");
// Question 2
// Create a set containing 0 to 10 using loop
//
const setNumbers = new Set();
let a = 0;
while (a < 11) {
	setNumbers.add(a);
	a++;
}
console.log(setNumbers);
console.log("~~~~~~~~~~~~~~~");
// Question 3
// Remove an element from a set
//
setNumbers.delete(5);
console.log(setNumbers);

console.log("~~~~~~~~~~~~~~~");
// Question 4
// Clear a set
//
setNumbers.clear();
console.log(setNumbers);
console.log("~~~~~~~~~~~~~~~");
// Question 5
// Create a set of 5 string elements from array
//
const cars = ["Audi", "Ferrari", "Ford", "BMW", "Cadillac", "audi", "Audi"];
const setCars = new Set();
for (const car of cars) {
	setCars.add(car);
}
console.log(setCars);
console.log("~~~~~~~~~~~~~~~");
// Question 6
// Create a map of countries and number of characters of a country
//
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const setCountry = new Set();

countries.map(elem => {
	setCountry.add({ elem, length: elem.length });
});

console.log(setCountry);
