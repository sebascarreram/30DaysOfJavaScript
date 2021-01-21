// Question 1
// Calculate the total annual income of the person from the following text.
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
//
const calculate = (moneyMonth, annualBonus, onlineMoney) => {
	// 
	// Salary per month:
	// month x 12 months
	const annual = moneyMonth * 12;
	//
	// Annual + annual bonus
	const bonus = annual + annualBonus;
	//
	// Earns per month:
	// online * 12 months
	const online = onlineMoney * 12;

	const total = bonus + online;

	return `He earns ${moneyMonth} euro from salary per month => ${moneyMonth} x 12 months = ${annual},\n${annualBonus} euro annual bonus => ${annual} annual + ${annualBonus} annual bonus = ${bonus},\n${onlineMoney} euro online courses per month => ${onlineMoney} * 12 months = ${online}.\nThe annual => ${bonus} + ${online} = ${total}`
}
console.log(calculate(4000,  10000, 5500))
console.log("~~~~~~~~~~~~~~~")
// Question 2
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin,
// 4 and 8 in the positive direction.
// Extract these numbers and find the distance between the two furthest particles.
//
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
//

console.log("~~~~~~~~~~~~~~~")
// Question 3
// Write a pattern which identify if a string is a valid JavaScript variable.
//
// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
//
const is_valid_variable = name => {
	const pattern = /^[first]{5}_?[name]{4}$/gi;
	const result = pattern.test(name);
	return `${name} => ${result}` 
}

console.log(is_valid_variable('first_name'))	// True
console.log(is_valid_variable('first-name'))	// False
console.log(is_valid_variable('1first_name'))	// False
console.log(is_valid_variable('firstname'))		// True
console.log(is_valid_variable('firstName'))		// True
console.log(is_valid_variable('firStname'))		// True
console.log(is_valid_variable('Firstname'))		// True
console.log(is_valid_variable('first&name'))		// false 
console.log(is_valid_variable('firstn&me'))		// false
console.log(is_valid_variable('+irstn&me'))		// false
console.log(is_valid_variable('+firstn&me'))		// false



