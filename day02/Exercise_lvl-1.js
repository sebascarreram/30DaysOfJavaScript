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

// Change 30 Days Of JavaScript to 30 Days Of Python
console.log(`12) 30 Days Of JavaScript to ${challenge.replace('JavaScript', 'Python')}`);

// What is character at index 15 in '30 Days Of JavaScript' string? 
console.log(`13) Index 15 in \'${challenge}\' is: ${challenge.charAt(15)}`)

// What is the character code of J in '30 Days Of JavaScript'
console.log(`14) J in UTF-16 code is: ${challenge.charCodeAt(11)}`)

// To determine the position of the first occurrence of 'a' in 30 Days Of JavaScript
console.log(`15) The first occurrence of \'a\' in ${challenge} is:  ${challenge.indexOf('a')} position`);

// To determine the position of the last occurrence of 'a' in 30 Days Of JavaScript
console.log(`16) The last occurrence of \'a\' in ${challenge} is: ${challenge.lastIndexOf('a')}`)

let sentWord = 'You cannot end a sentence with because because because is a conjunction'
console.log("~~~~~~~~~~~~~~~~~~~~");
console.log(`* sentence: ${sentWord}`);
console.log(`* sentence of length is: ${sentWord.length}`);

// To find the position of the first occurrence of the word 'because' -> indexOf()
console.log(`17) To find the position of the first occurrence of the \'because\': ${sentWord.indexOf('because')} position`)

// To find the position of the last occurrence of the word 'because' -> lastIndexOf()
console.log(`18) To fin the position of the last occurrence of the \'because\': ${sentWord.lastIndexOf('because')} position`)

// To find the position of the first occurrence of the word 'because' -> search()
console.log(`19) To find the position of the first occurrence of the \'because\': ${sentWord.search(/because/)} position`)
console.log("~~~~~~~~~~~~~~~~~~~~");
// To remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '
let wordWithSpace = '      30 Days Of JavaScript     ';
console.log(wordWithSpace);
console.log(`20) Without space: ${wordWithSpace.trim()}`)
console.log("~~~~~~~~~~~~~~~~~~~~");

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(`21) ${challenge.startsWith('30 Days Of JavaScript')}`);


// Use endsWith() method with the string 30 Days Of JavaScript and make the result truei
console.log(`22) ${challenge.endsWith('30 Days Of JavaScript')}`);

// To find all the a's in 30 Days Of JavaScript
console.log(`23) To fin all the \'a\' in ${challenge}: ${challenge.match(/a/g)}`)

let word1 = '30 Days of';
let word2 = 'JavaScript';

console.log(`24) ${word1.concat(" ",word2)}`);

// To print 30 Days Of JavaScript 2 times
console.log(`25) ${challenge.repeat(2)}`)






