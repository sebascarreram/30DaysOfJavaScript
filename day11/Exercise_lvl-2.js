const rectangle = {
	width: 20,
	height: 10,
	area: 200,
	perimeter: 60
};
const users = [
	{
		name: "Brook",
		scores: 75,
		skills: ["HTM", "CSS", "JS"],
		age: 16
	},
	{
		name: "Alex",
		scores: 80,
		skills: ["HTM", "CSS", "JS"],
		age: 18
	},
	{
		name: "David",
		scores: 75,
		skills: ["HTM", "CSS"],
		age: 22
	},
	{
		name: "John",
		scores: 85,
		skills: ["HTML"],
		age: 25
	},
	{
		name: "Sara",
		scores: 95,
		skills: ["HTM", "CSS", "JS"],
		age: 26
	},
	{
		name: "Martha",
		scores: 80,
		skills: ["HTM", "CSS", "JS"],
		age: 18
	},
	{
		name: "Thomas",
		scores: 90,
		skills: ["HTM", "CSS", "JS"],
		age: 20
	}
];

console.log("~~~~~~~~~~~");
// Question 1
// Iterate through the users array and get all the keys of the object using destructuring
//
for (const { name, scores, skills, age } of users) {
	console.log(name, scores, skills, age);
}

console.log("~~~~~~~~~~~");
// Question 2
// Find the persons who have less than two skills
//
for (const { name, scores, skills, age } of users) {
	if (skills.length < 3) {
		console.log(name, scores, skills, age);
	}
}
