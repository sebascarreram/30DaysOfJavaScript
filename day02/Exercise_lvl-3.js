// Count the number of word 'love' in this sentence.
const sentence =
	"Love is the best thing in this world. Some found their love and some are still looking for their love.";

const onlyLove = sentence.match(/love/gi);
const loveLen = onlyLove.length;

console.log(`1) \'love\' or \'Love\' has: ${loveLen} words`);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Count the number of word 'because' in this sentence
const sentence1 =
	"You cannot end a sentence with because because because is a conjunction";

const onlyBC = sentence1.match(/because/gi);
const BCLen = onlyBC.length;

console.log(`2) \'becase\' has: ${BCLen} words`);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence2 =
	"%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

// const cleanSent = sentence2.match(/[\w\s]/gi);

// again
const cleanSent = sentence2.replace(/[!@#$%&*;?]/gi, "");

// const cleanSent_one = sentence2.replace(/(%|@|&|#)/gi, '')

// const toStr = cleanSent.toString();

// console.log(cleanSent)
console.log("~~~~~~~~~~~~~~~~~");
// console.log(toStr);
console.log(cleanSent);
console.log("~~~~~~~~~~~~~~~~~");
// console.log(withoutComma);

// Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const months = 12;
const annualBonus = 10000;

const salary = 5000 * months;
const coursesOnline = 15000 * months;

const totalAnnual = salary + coursesOnline + annualBonus;

console.log(`Total annual of the person: ${totalAnnual}`);
