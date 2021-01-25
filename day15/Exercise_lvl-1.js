// Question 1
// Change skills array to JSON using JSON.stringify()
//
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
const txt = JSON.stringify(skills, undefined, 3);
console.log(txt);

console.log("~~~~~~~~~~~~~")
// Question 2
// Stringify the age variable
//
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt1 = JSON.stringify(student, [ 'age' ] , 3)
console.log(txt1);

console.log("~~~~~~~~~~~~~")
// Question 3
// Stringify the isMarried variable
//
const txt2 = JSON.stringify(student, [ 'isMarried' ], 3);
console.log(txt2);

console.log("~~~~~~~~~~~~~")
// Question 4
// Stringify the student object
//
const txt3 = JSON.stringify(student, undefined, 3);
console.log(txt3);
console.log("~~~~~~~~~~~~~")
