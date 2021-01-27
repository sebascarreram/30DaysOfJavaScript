const { txt } = require("./studentsJSON");
// Question 1
// Parse the txt JSON to object.
//
// console.log(JSON.parse(txt, undefined, 4));
//
console.log("~~~~~~~~~~~~~");
// Question 2
// Find the the user who has many skills from the variable stored in txt.
//
// JSON -> Object
const student = JSON.parse(txt, undefined, 3);

// FINAL array
const objArray = [];

// name array
const name = Object.keys(student);

// value arry
const info = Object.values(student);

// name array with 'name' property
// const nameObj = [];

// [ 'Sebas', 'Sofia' ] -> [ { name: 'Sebas' }, { name: 'Sofia' } ]
// name.forEach(el => nameObj.push({ name: el }));

for (let a = 0; a < name.length; a++) {
	objArray.push({ name: name[a], ...info[a] });
}

objArray.sort((a, b) => b.skills.length - a.skills.length);

// eg.
// [ "HTML", "CSS" ]
// [ "HTML", "CSS" ]
// [ "CSS" ]
// If there are two who has many skills or one
const nbrFound = objArray.filter(
	el => objArray[0].skills.length === el.skills.length
);
console.log(`There ${nbrFound.length === 1 ? "is" : "are"} ${nbrFound.length}`);
console.log(nbrFound);
