console.log('1)');
const base = 20;
const height = 10;
console.log(`Base: ${base} and Height: ${height}`);
console.log(`The area of the triangle: ${0.5 * base * height}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('2)');
const sideA = 5;
const sideB = 4;
const sideC = 3;

console.log(`The perimeter of the triangle: ${sideA + sideB + sideC}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('3)');
const len = 5;
const width = 30;

console.log(`The area of rectangle: ${2*(len + width)}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('4)');
const pi = 3.14;
const radio = 5;

const totalAC = pi * radio * radio;
const totalCC = 2 * pi * radio; 

console.log(`The area of a circle: ${totalAC.toFixed(1)}`);
console.log(`The circumference of a circle: ${totalCC.toFixed(1)}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('5)');
// y = 2x - 2

const m = 2;
const c = 2;

// y-intercept
const y = m * 0 - c;

console.log(`The Slope.\ny = ${y}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('6)');
// m = y2-y1/x2-x1
// point (2, 2) and point(6,10)

const numb_x1 = 2;
const numb_x2 = 2;

const numb_y1 = 6;
const numb_y2 = 10;

const totalSo = numb_y2 - numb_y1 / numb_x2 - numb_x1;
console.log(` m = ${numb_y2} - ${numb_y1} / ${numb_x2} - ${numb_x1}`);
console.log(` Total of Scope: ${totalSo}`);

console.log('~~~~~~~~~~~~~~~~~');
console.log('7)');

// Compare the slope of above two questions.
console.log(`Compare the slope: ${totalSo === y}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('8)');
// This is called the polynomial
// y = x^2 + 6x + 9

const nbr = 4;

const numbPow = Math.pow(nbr, 2);

const totalY = numbPow + 6 * nbr + 9;
console.log('The polynomial');
console.log(totalY);

console.log('~~~~~~~~~~~~~~~~~');

console.log('9)');

const hours = 40;
const rateXHour = 28;

console.log(`Hours: ${hours}`);
console.log(`Rate per hour: ${rateXHour}`);

console.log(`Your weekly earning is: ${hours * rateXHour}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('10)');
// If the length of your name is greater than 7 say, your name is long else say your name is short.

const myName = 'Sebastian';
const nameLen = myName.length;

const checkName = nameLen > 7 ? 'It\'s long' : 'It\'s short';
console.log(`My name is ${myName}`);
console.log(`Length of my name is: ${nameLen}`);
console.log(`${nameLen} > 7`);
console.log(checkName);

console.log('~~~~~~~~~~~~~~~~~');

console.log('11)');
// Compare your first name length and your family name length and you should get this output.
// Example: Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

const firstLeng = firstName.length;
const lastLeng = lastName.length;

const firstFinal = `${firstName} is longer than your family name, ${lastName}`;
const lastFinal = `${lastName} is longer than your name, ${firstName}`;

const checkFlyLeng = firstLeng > lastLeng ? `${firstFinal}`: `${lastFinal}`;

console.log(checkFlyLeng);

console.log('~~~~~~~~~~~~~~~~~');

console.log('12)');
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge
// Example: I am 225 years older than you.
let myAge = 250;
let yourAge = 26;

let checkAge = myAge > yourAge ? myAge : yourAge;

console.log(`I am ${checkAge} years older than you`);

console.log('~~~~~~~~~~~~~~~~~');
// Using prompt get the year the user was born and if the user is 18 or above
// allow the user to drive if not tell the user to wait a certain amount of years.
// 

const nowDate = new Date();
const myYear = 2002;

// Check what is my age old now. Check my year with date year actual.
const checkYear = nowDate.getFullYear() - myYear;

// Sentence for 18 above
const word1 = 'You are old enough to drive';
// Sentence for 18 under
const word2 = `You will be allowed to drive after ${18 - checkYear} years.`;
// Check if your is 18 year old under to drive.
const checkAge1 = checkYear >= 18 ? `${word1}`: `${word2}`;

const finalAge = `You are ${checkYear}. ${checkAge1}`;
console.log(finalAge);

console.log('~~~~~~~~~~~~~~~~~');

console.log('14)');

// Write a script that prompt the user to enter number of years.
// Calculate the number of seconds a person can live.
// Assume some one lives just hundred years.
// Example:
// Enter number of yours live: 100
// You lived 3153600000 seconds.
//
// My birthday
const myYear1 = 1994;
const myMonth = 3; // index ->  0 - 11
const myDay = 1;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dateYear = new Date();

const yearsNow = dateYear.getFullYear(); // Years as number (yyyy);
const monthsNow = dateYear.getMonth(); // Months as a number (0-11);
const weeksNow = dateYear.getDay(); // Weeks as a number (0-6)
const daysNow = dateYear.getDate(); // Days as a number (1-31);

// my age
const myAge1 = yearsNow - myYear1;

// console.log(`Number of your live: ${yearsNow}`);
//console.log(`Your live ${sec} seconds`);

console.log(`Date actual: ${yearsNow} / ${monthsNow + 1} / ${daysNow}`);
console.log(`Date actual: ${yearsNow} / ${months[monthsNow]} / ${daysNow}`);

console.log(`My birthday: ${myDay + 1} / ${months[myMonth]} / ${myYear1}`);
console.log(`I am ${myAge1} years old`);
console.log('#')
// console.log('From my birthday until now:');

// Year is a leap year or not
const messageLeap1 = `Year ${myYear1} ${myYear1 === yearsNow ? 'is' : 'was'} a leap year`;
const messageLeap2 = `Year ${myYear1} ${myYear1 === yearsNow ? 'is not' : 'was not'} a leap year`;

const isLeap = `${parseInt(myYear1 / 4) === myYear1 / 4 ? messageLeap1 : messageLeap2}`
console.log(isLeap);

//
console.log(`${myAge1} years / ${monthsNow - myMonth} months / ${daysNow - myDay} days`);

// (myAge * 12 months) + 7 months
let monthsTotal = (myAge1 * 12) + monthsNow - myMonth;

// Weeks
const ab = new Date(`${myYear1}-${myMonth + 1}-${myDay}`).setHours(0,0,0,0); 
const ac = dateYear.setHours(0,0,0,0);
// millSeconds
const mSeconds = ac - ab;
const wS = mSeconds / (1000 * 60 * 60 * 24 * 7)
const flo = Math.floor(wS);
// ?
let weeksTotal = flo;

// Total weeks x 7 days
let daysTotal = weeksTotal * 7;

// Total days x 24hr
let hoursTotal = daysTotal * 24;

// Total hours x 60 minutes
let minutesTotal = hoursTotal * 60;

// Total minutes x 60 minutes
let secondsTotal = minutesTotal * 60;

console.log(`${monthsTotal} months ${daysNow - myDay} days`)
console.log(`${weeksTotal} weeks`);
console.log(`${daysTotal} days`);
console.log(`${hoursTotal} hours`);
console.log(`${minutesTotal} minutes`);
console.log(`${secondsTotal} seconds`);





