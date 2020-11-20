console.log('1)')
let firstName = 'Sebastian';
let lastName = 'Carrera';
const country = 'Colombia';
const city = 'Cali';
const age = 26;
let isMarried = false;
console.log(`${firstName}: ${typeof firstName}`);
console.log(`${lastName}: ${typeof lastName}`);
console.log(`${country}: ${typeof country}`);
console.log(`${city}: ${typeof city}`);
console.log(`${age}: ${typeof age}`);
console.log(`${isMarried}: ${typeof isMarried}`);

console.log('~~~~~~~~~~~~~~~~~');
console.log('2)');
console.log(`\'10\' == 10 -> ${'10' == 10}`);
console.log(`\'10\' === 10 -> ${'10' === 10}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('2) ');
console.log(`\'10\' == 10 -> ${parseInt('9,8') == 10}`);
console.log(`\'10\' === 10 -> ${parseInt('9,8') === 10}`);

console.log('~~~~~~~~~~~~~~~~~');

console.log('3)');
console.log('#');
// Only TRUE
console.log('--');
console.log('Only TRUE');
console.log('--');

const name1 = 'Sebastian';
const name2 = 'Sofia';

console.log(`Name: ${name1}`);
console.log(`Name: ${name2}`);

const nameLen1 = name1.length;
const nameLen2 = name2.length;

console.log('##')

const nameIdx1 = name1.indexOf('S');
const nameIdx2 = name2.indexOf('S');


console.log(`1st position of ${name1} => ${nameIdx1}`);
console.log(`1st position of ${name2} => ${nameIdx2}`);
console.log(`Comparing: ${nameIdx1} === ${nameIdx2} => ${nameIdx1 === nameIdx2}`);

console.log('##');

const nameSli1 = name1.slice(0, 5);
const nameSliLen = nameSli1.length;

console.log(nameSli1)
console.log(name2);
console.log(`Comparing length => ${nameSliLen === nameLen2}`);

console.log('##');

const age1 = 26;
const age2 = 26;
console.log(`I am ${age1} years old`);
console.log(`My friend is ${age2} years old`);
console.log(`Comparing of age: ${age1 === age2}`);


// Only FALSE
console.log('--');
console.log('Only FALSE');
console.log('--');

console.log(`${name1} of length: ${nameLen1} === ${name2} of length: ${nameLen2} -> ${nameLen1 === nameLen2}`);

console.log('##');

const dogAge1 = 9;
const dogAge2 = 7;
console.log(`My dog Muneca is ${dogAge1} years old`);
console.log(`My dog Lupita is ${dogAge2} years old`);
console.log(`Comparing of age: ${dogAge1 === dogAge2}`);

console.log('##');

const weight1 = 46;
const weight2 = 45;
console.log(`My weigth is ${weight1} kg`);
console.log(`Weigth of my sister is ${weight2} kg`);
console.log(`Comparing of weigth: ${weight1 === weight2}`);

console.log('~~~~~~~~~~~~~~~~~');
console.log('5)');

console.log(`4 > 3: ${4 > 3}`);
console.log(`4 >= 3: ${4 >= 3}`);
console.log(`4 < 3: ${4 < 3}`);
console.log(`4 <= 3: ${4 <= 3}`);
console.log(`4 == 4: ${4 == 4}`);
console.log(`4 === 4: ${4 === 4}`);
console.log(`4 != 4: ${4 != 4}`);
console.log(`4 !== 4: ${4 !== 4}`);
console.log(`4 != \'4\': ${4 != '4'}`);
console.log(`4 == \'4\': ${4 == '4'}`);
console.log(`4 === \'4\': ${4 === '4'}`);

let wordPy = 'python';
let wordJa = 'jargon';

const wordPyLen = wordPy.length;
const wordJaLen = wordJa.length;
console.log(`Comparing of length: ${wordPy} and ${wordJa} => ${wordJaLen === wordPyLen}`);

console.log('~~~~~~~~~~~~~~~~~');
console.log('6)');
console.log(`4 > 3 && 10 < 12 -> ${4 > 3 && 10 < 12}`);
console.log(`4 > 3 && 10 > 12 -> ${4 > 3 && 10 > 12}`);
console.log(`4 > 3 || 10 < 12 -> ${4 > 3 || 10 < 12}`);
console.log(`4 > 3 || 10 > 12 -> ${4 > 3 || 10 > 12}`);
console.log(`!(4 > 3) -> ${!(4 > 3)}`);
console.log(`!(4 < 3) -> ${!(4 < 3)}`);
console.log(`!(false) -> ${!(false)}`);
console.log(`!(4 > 3 && 10 < 12) -> ${!(4 > 3 && 10 < 12)}`);
console.log(`!(4 > 3 && 10 > 12) -> ${!(4 > 3 && 10 > 12)}`);
console.log(`!(4 === \'4\') -> ${!(4 === '4')}`);

const wordPyOn = wordPy.match(/on/gi);
const wordJaOn = wordJa.match(/on/gi);

console.log(`${wordPy} -> ${!(wordPyOn)}`);
console.log(`${wordJa} -> ${!(wordJaOn)}`);

console.log('~~~~~~~~~~~~~~~~~');
console.log('7)');

const dat = new Date();

console.log(`Year: ${dat.getFullYear()}`);
console.log(`Month(index): ${dat.getMonth()}`);
console.log(`Date-today: ${dat.getDate()}`);
console.log(`Today: ${dat.getDay()}`);
console.log(`Hours now: ${dat.getHours()}`);
console.log(`Minutes: ${dat.getMinutes()}`);
console.log(`Since Jan-01-1970 until now: ${Date.now()}`);



