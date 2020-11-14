console.log("1) The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log("2) Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(`3) ${typeof '10' === 10}`);

console.log(`4) ${parseFloat('9.8') === 10}`);

let word1 = 'python';
let word2 = 'jargon';

console.log(`5) \'on\' -> ${word1}: ${word1.includes('on')}`);
console.log(`5) \'on\' -> ${word2}: ${word2.includes('on')}`);

let word3 = 'I hope this course is not full of jargon';
console.log(`6) \'jargon\' -> ${word3}: ${word3.includes('jargon')}`)

// Generate a random number between 0 and 100 inclusively
console.log(`7) ${Math.floor(Math.random() * 101)}`);

// Generate a random number between 50 and 100 inclusively
console.log(`8) ${Math.floor(Math.random() * (100 - 50 + 1)) + 50}`);
 
// Generate a random number between 0 and 255 inclusively
console.log(`9) ${Math.floor(Math.random() * 256)}`);

// Access the 'JavaScript' string characters using a random number.
let str = 'JavaScript';
const strLen = str.length;
console.log(`10) ${Math.floor(Math.random() * strLen)}`);

console.log('11)')
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

console.log('~~~~~~~~~~~~~~~')
const be = 'because';
const beLen = be.length;

let word4 = 'You cannot end a sentence with because because because is a conjunction'
console.log(`12) ${word4.substr(31, (beLen * 3) + 2)}`);



