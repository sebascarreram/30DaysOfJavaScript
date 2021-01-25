const { student } = require("./students");
// Question 1
// Stringify the students object with only firstName, lastName and skills properties
//
const txt = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 3);
//
console.log(txt);
