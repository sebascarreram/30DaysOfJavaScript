// Question 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
//
class Animal {
	constructor(name, age, color, legs) {
		this.name = name,
		this.age = age,
		this.color = color,
		this.legs = legs
	}
	get herYears () {
		return `${this.name} is ${this.age} years old.`
	}
	get herLegs () {
		return `${this.name} has ${this.legs} legs.`
	}
	get herColor () {
		return `${this.name} has ${this.color} hair.`
	}
}
const cat = new Animal("Pincher chihuahua", 8, "Black", 4)

console.log(cat)
console.log(cat.herYears)
console.log(cat.herLegs)
console.log(cat.herColor)
console.log("~~~~~~~~~~~~~")
// Question 2
// Create a Dog and Cat child class from the Animal Class.
//
// Parent Animal class -> Dog child class
class Dog extends Animal {
	constructor(name, food){
		super(name);
		this.food = food;
	}
	getFood () {
		return `${this.name} eats ${this.food}.`
	}
}
//	Dog child class -> Cat child class
class Cat extends Dog {
	constructor(name, food, cancer = false){
		super(name, food);
		this.cancer = cancer;
	}
	isCancer() {
		return this.cancer ? `${this.name} has cancer` : `${this.name} has NOT cancer.`;
	}
}

const dog1 = new Dog("Labrador", "chicken");
console.log(dog1.getFood())

const cat1 = new Cat("Persian", "fish");
const cat2 = new Cat("Maine Coon", "Budget Pick", true);
const cat3 = new Cat("Bengal cat", "Pro Plan Focus Kitten");
console.log(cat1.getFood())
console.log(cat2.getFood())
console.log(cat2.isCancer())
console.log(cat3.isCancer())
