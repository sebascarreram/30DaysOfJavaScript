const countries = [
	{ country: "China", population: 1377422166, language: "Mandarin" },
	{ country: "India", population: 1295210000, language: ["Indi", "English"] },
	//	{ country: "United States of America", population: 323947000, language: "English" },
	{ country: "Indonesia", population: 258705000, language: "Indonesian" },
	{ country: "Brazil", population: 206135893, language: "Portuguese" },
	{ country: "Pakistan", population: 194125062, language: ["Urdu", "English"] },
	{ country: "Nigeria", population: 186988000, language: "English" },
	{ country: "Bangladesh", population: 161006790, language: "Bengali" },
	{ country: "Russian Federation", population: 146599183, language: "Russian" },
	{ country: "Japan", population: 126960000, language: "Japanese" }
];

console.log("~~~~~~~~~~~~~~");
// Question 1
// Destructure the countries object print name, capital, population and languages of all countries
//
for (const { country, population, language } of countries) {
	console.log(country, population, language);
}
console.log("~~~~~~~~~~~~~~");
// Question 2
// A junior developer structure student name, skills and score in array of arrays which may not easy to read.
// Destructure the following array name to name, skills array to skills, scores array to scores,
// JavaScript score to jsScore and React score to reactScore variable in one line.
//
//
// const student = ['david', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// console.log(name, skills, jsscore, reactscore)
//
// David (4) ["HTML", "CSS", "JS", "React"] 90 95
//
//
const student = [
	{
		name: "Sebastian",
		skills: ["HTML", "CSS", "JS", "React"],
		scores: [98, 85, 90, 95]
	},
	{
		name: "Sofia",
		skills: ["Node", "Express", "MongoDB"],
		scores: [100, 90, 95, 100]
	}
];

for (const { name, skills, scores } of student) {
	console.log(name, skills, scores);
}

console.log("~~~~~~~~~~~~~~");
// Question 3
// Write a function called convertArrayToObject which can convert the array to a structure object.
//
const students = [
	["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
	["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]]
];
//
// console.log(convertArrayToObject(students))[
// 	({
// 		name: "David",
// 		skills: ["HTM", "CSS", "JS", "React"],
// 		scores: [98, 85, 90, 95]
// 	},
// 	{
// 		name: "John",
// 		skills: ["HTM", "CSS", "JS", "React"],
// 		scores: [85, 80, 85, 80]
// 	})
// ];
//

console.log("~~~~~~~~~~~~~~");
// Question 4
// Copy the student object to newStudent without mutating the original object.
// In the new object add the following ?
//
// * Add Bootstrap with level 8 to the front end skill sets
// * Add Express with level 9 to the back end skill sets
// * Add SQL with level 8 to the data base skill sets
// * Add SQL without level to the data science skill sets
//
const studentOriginal = {
	name: "David",
	age: 25,
	skills: {
		frontEnd: [
			{ skill: "HTML", level: 10 },
			{ skill: "CSS", level: 8 },
			{ skill: "JS", level: 8 },
			{ skill: "React", level: 9 }
		],
		backEnd: [
			{ skill: "Node", level: 7 },
			{ skill: "GraphQL", level: 8 }
		],
		dataBase: [{ skill: "MongoDB", level: 7.5 }],
		dataScience: ["Python", "R", "D3.js"]
	}
};
//
// The copied object output should look like this:
//
//
// {
// 	name: "David",
// 	age: 25,
// 	skills: {
// 		frontEnd: [
// 			{ skill: "HTML", level: 10 },
// 			{ skill: "CSS", level: 8 },
// 			{ skill: "JS", level: 8 },
// 			{ skill: "React", level: 9 },
// 			{ skill: "BootStrap", level: 8 }
// 		],
// 		backEnd: [
// 			{ skill: "Node", level: 7 },
// 			{ skill: "GraphQL", level: 8 },
// 			{ skill: "Express", level: 9 }
// 		],
// 		dataBase: [
// 			{ skill: "MongoDB", level: 7.5 },
// 			{ skill: "SQL", level: 8 }
// 		],
// 		dataScience: ["Python", "R", "D3.js", "SQL"]
// 	}
// };
//
// Copy Object
const copyStudent = JSON.parse(JSON.stringify(studentOriginal));

// Desctucturing OBJECT
const { name, age, skills } = copyStudent;

// PUSH -> frontEnd
skills.frontEnd.push({
	skill: "BootStrap",
	level: 8
})
// PUSH -> backEnd
skills.backEnd.push({
	skill: 'Express',
	level: 9
})
// PUSH ->  dataBase
skills.dataBase.push({
	skill: 'SQL',
	level: 8
})
// PUSH -> dataScience
skills.dataScience.push("SQL")
// PUSH END

console.log("Array ORIGINAL")
console.log(studentOriginal.skills)
console.log("Copy and modify")
console.log(copyStudent.skills);
