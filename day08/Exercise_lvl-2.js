const { users } = require("./users");
const { countries } = require("./countries");
// Question 1
// Find the person who has many skills in the users object.
//
const isSkills = elem => {
	// Object -> array
	const ac = Object.values(elem);
	// the length of the user array
	const elemLen = ac.length;

	let a = 0;
	let b = 0;
	while (a < elemLen) {
		while (b < elemLen) {
			if (a === elemLen) {
				break;
			} else {
				if (ac[a].skills.length > ac[b].skills.length) {
					b++;
				} else {
					a++;
				}
			}
		}
	}
	const keys = Object.keys(elem);

	console.log(`${keys[b]} has more skills:`);
	console.log(ac[b]);
};
isSkills(users);

//console.log(users)
console.log("~~~~~~~~~~~~~~");
// Question 2
// Count logged in users,count users having greater than equal to 50 points from the following object.
//
const isPoints = elem => {
	let name = Object.keys(elem);
	//
	let values = Object.values(elem);
	// the length of the array
	const elemLen = values.length;

	let a = 0;
	let b = 0;
	while (a < elemLen) {
		if (values[a].points >= 50) {
			console.log(name[a]);
			b++;
		}
		a++;
	}
	console.log(`* There are ${b} users. Having greater than equal to 50 points`);
};
isPoints(users);

console.log("~~~~~~~~~~~~~~");
// Question 3
// Find people who are MERN stack developer from the users object
//
const isMERN = elem => {
	// Name or user
	let name = Object.keys(elem);
	//
	var val = Object.keys(elem).map(function (key) {
		return elem[key];
	});
	//let val = Object.values(elem);

	// the length of the array
	const elemLen = name.length;

	// Regex MERN
	let mongo = /mongodb/gi;
	let express = /express|expressjs/gi;
	let react = /react|reactjs/gi;
	let node = /node|nodejs/gi;

	// name array
	let nameArray = [];

	let a = 0;
	while (a < elemLen) {
		//
		const skills = val[a].skills;
		//
		const aa = mongo.test(skills);
		const ab = express.test(skills);
		const ac = react.test(skills);
		const ad = node.test(skills);

		// all true to push name to array if these skills are find MERN
		if (aa && ab && ac && ad) {
			nameArray.push(name[a]);
		}
		a++;
	}

	if (nameArray.length) {
		console.log(`There are users with MERN:\n${nameArray}`);
	} else {
		console.log("There are NOT users with MERN");
	}
};
isMERN(users);

console.log("~~~~~~~~~~~~~~");
// Question 4
// Set your name in the users object without modifying the original users object
//
//
console.log("Original Array");
console.log(Object.keys(users));
//
// Copy name in the users object
console.log("##");
const copyName = Object.assign({}, users);
const name = Object.keys(copyName);
console.log("Copy array");
console.log(name);
//
name[0] = "Sebastian";
//
console.log("##");
console.log("After modifying the copy");
console.log(name);
//
console.log("##");
console.log("Original Array");
console.log(Object.keys(users));

console.log("~~~~~~~~~~~~~~");
// Question 5
// Get all keys or properties of users object
//
console.log(Object.keys(users));
console.log("~~~~~~~~~~~~~~");
// Question 6
// Get all the values of users object
//
console.log(Object.values(users));
console.log("~~~~~~~~~~~~~~");
// Question 7
// Use the countries object to print a country name, capital, populations and languages.
//
// country name
console.log("Name");
console.log(Object.keys(countries));
// Values of the countries
console.log("Value of the countries");
console.log(Object.values(countries));
// Print all
console.log("All");
console.log(countries);
// If there is a country it is called United states in object?
// let's go
const isUSA = elem => {
	// country name
	const name = Object.keys(elem);

	const regexName = /united states/gi;

	if (regexName.test(name)) {
		console.log("FOUND ✅!!");
	} else {
		console.log("Mmmm. Why is this country not on the list? 🤔");
	}
};
isUSA(countries);
