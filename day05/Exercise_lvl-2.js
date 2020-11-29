const { countries } = require("./countries");
const { webTechs } = require("./web_techs");

console.log(countries);
console.log(webTechs);

console.log("~~~~~~~~~~~~~~");
// Question 1
// First remove all the punctuations and change the string to array and count
// the number of words in the array.
//
let text =
	"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// Remove all the punctuations
const deletePunctua = text.replace(/[.,:;]/gi, "");

// String to Array
// Remove space between word
const words = deletePunctua.split(" ");

// Print
console.log(words);
// Count the number of words in the array
console.log(`The number of words in the array is: ${words.length}`);

console.log("~~~~~~~~~~~~~~");
// Question 3
// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey", "Meat"];
console.log("###");
console.log(shoppingCart);
console.log("###");
//
// ADD 'Meat' in the beginning of your shopping cart if it has not been already added
//
const food = "Meat";
const food1 = "Honey";

// Check it if the food exists in the array
if (shoppingCart.indexOf(food)) {
	console.log(`This \'${food}\' has been already added in the array`);
} else {
	// Add an item in the beginning in the array
	shoppingCart.unshift(food);
	console.log("Added a item to the array");
	console.log(shoppingCart);
}

console.log("~~~~~~~~~~~~~~~~");
//
// Add Sugar at the end of you shopping cart if it has not been already added
//
// Check it if the food exists in the array
if (shoppingCart.indexOf(food1)) {
	console.log(`This \'${food1}\' has been already added in the array`);
} else {
	// Add an item in the end in the array
	shoppingCart.push(food1);
	console.log("Added a item to the array");
	console.log(shoppingCart);
}

console.log("~~~~~~~~~~~~~~~~");
// Remove 'Honey' if you are allergic to honey
//
const isAllergic = true;

if (isAllergic) {
	const findFood = shoppingCart.indexOf("Honey");

	const deleteAllergic = shoppingCart.splice(findFood, 1);
	console.log(`Allergic is ${isAllergic}`);
	console.log(`Removed an item -> ${deleteAllergic}`);
	console.log(shoppingCart);
} else {
	console.log(`Allergic is ${isAllergic}\nHave a great day!`);
	console.log(shoppingCart);
}

console.log("~~~~~~~~~~~~~~~~");
//
// Modify Tea to 'Green Tea'
//
const wordOld = "Tea";
const wordNew = "Green Tea";
const isOn = true;

const isWord = shoppingCart.indexOf(wordOld);

console.log("Array old");
console.log(shoppingCart);

if (isWord === -1) {
	console.log("--");
	console.log(`Your item \'${wordOld}\' is not in array`);
	console.log("--");
	console.log("Do you want to add a new item to Array");

	// Yes to add (ON - true)
	// Not to add (OFF - false)
	if (isOn) {
		// Add a new item to array
		shoppingCart.push(wordOld);

		// Print
		console.log("##");
		console.log(
			`Added a new item! -> ${shoppingCart[shoppingCart.length - 1]}`
		);

		// Print items again
		console.log(shoppingCart);
	} else {
		console.log("Add a new item  ->  CANCELLED");
	}
} else {
	const findWord = shoppingCart.indexOf(wordOld);
	shoppingCart[findWord] = wordNew;
	console.log("Modified");
	console.log(shoppingCart);
}

console.log("~~~~~~~~~~~~~~~~");
//
// Question 4
// In countries array check if 'Ethiopia' exists in the array if it exists
// print 'ETHIOPIA'. If it does not exist add to the countries list.

const wordCountry = "Ethiopia";

const isContry = countries.indexOf(wordCountry);

const index = isContry;

// Check if country exists in the array or not
if (isContry === -1) {
	// Print
	console.log(`Not found -> \'${wordCountry}\' in the Array`);

	// Check if your wish to add a new country
	console.log("Do you want to add this new country to Array?");

	if (isOn) {
		// Add in the end of the Array
		countries.push(wordCountry);
		// Print
		console.log(`Added a new country -> ${wordCountry.toUpperCase()}`);
		// Print countries
		console.log(countries);
	} else {
		console.log("CANCELLED");
	}
} else {
	// Print country found in uppercase
	console.log(`Found this item -> ${countries[index].toUpperCase()}`);
}

console.log("~~~~~~~~~~~~~~~~");
//
// Question 5
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.

const wordTech = "Sass";

const isWeb = webTechs.indexOf(wordTech);

const index1 = isWeb;

// Check if country exists in the array or not
if (isWeb === -1) {
	// Print
	console.log(`Not found -> \'${wordTech}\' in the Array`);

	// Check if your wish to add a new technology
	console.log("Do you want to add this new technology to Array?");

	if (isOn) {
		// Add in the end of the Array
		webTechs.push(wordTech);
		// Print
		console.log(`Added a new technology -> ${wordTech.toUpperCase()}`);
		// Print countries
		console.log(webTechs);
	} else {
		console.log("CANCELLED");
	}
} else {
	// Print country found in uppercase
	if (webTechs[index1] === "Sass") {
		console.log(`${webTechs[index1]} is a CSS preprocess`);
	} else {
		console.log(`Found this item -> ${webTechs[index1].toUpperCase()}`);
	}
}

console.log("~~~~~~~~~~~~~~~~");
//
// Question 6
// Concatenate the following two variables and store it in a fullStack variable.
//
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log("fullStack");
console.log(fullStack);
