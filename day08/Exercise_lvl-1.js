console.log("~~~~~~~~~~~~");
// Question 1
// Create an empty object called dog
const dog = {};
console.log("~~~~~~~~~~~~");
// Question 2
// Print the the dog object on the console
console.log(dog)
console.log("~~~~~~~~~~~~");
// Question 3
// Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof
//
dog.name = "Lupita";
dog.lastName = "Carrera";
dog.legs = 4;
dog.color = "black";
dog.age = 8;
dog.bark = "woof woof";

console.log(dog.bark)
console.log("~~~~~~~~~~~~");
// Question 4
// Get name, legs, color, age and bark value from the dog object
console.log(dog)
console.log("~~~~~~~~~~~~");
// Question 5
// Set new properties the dog object: breed, getDogInfo
dog.breed = "Pincher";
dog.getDogInfo = function(){
	return `${dog.name} ${dog.lastName}, she is ${dog.age} years old, she is a ${dog.color} ${this.breed}`
}
console.log(dog.getDogInfo());
console.log("~");
console.log("Final");
console.log(dog)
console.log("~~~~~~~~~~~~");
