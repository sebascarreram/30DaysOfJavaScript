console.log("~~~~~~~~~~~~~~~~~~~~");
// Declare a variable named challenge
let challenge = '30 Days Of JavaScript';
let companys = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// Print the string 
console.log(challenge);
console.log("~~~~~~~~~~~~~~~~~~~~");

// Print the LENGTH of the string
console.log(`3) Length of ${challenge} is: ${challenge.length}`);

// Change all the string characters to capital letters
console.log(`4) All string characters to upperCase => ${challenge.toUpperCase()}`);

// Change all the string characters to lowercase letters
console.log(`5) All string characters to lowercase => ${challenge.toLowerCase()}`);

// Cut out the first word of the string
console.log(`6) First word of the string is: ${challenge.substr(3, 5)}`);

// Slice out the phrase -> Days Of JavaScript from 30 Days Of JavaScript
console.log(`7) ${challenge.slice(3)}`);

// Check if the string contains a word Script using includes() method
console.log(`8) If the string contains a word \'Script\' in ${challenge} is:  ${challenge.includes('Script')}`);

// Split the string into an array using split() method
console.log(`9) String into an array: ${challenge.split()}`);

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(`10) ${challenge.split("")}`)

// Split the string at the comma and change it to an array
console.log(`11) ${companys.split(",")}`)
