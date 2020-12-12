console.log("~~~~~~~~~~~~~~");
// Question 1
// Iterate 0 to 10 using for loop, do the same using while and do while loop
//
console.log("for loop");
for (let i = 0; i <= 10; i++) {
	console.log(i);
}
console.log("while loop");
let i = 0;
while (i <= 10) {
	console.log(i);
	i++;
}
console.log("do while loop");
let a = 0;
do {
	console.log(a);
	a++;
} while (a <= 10);

console.log("~~~~~~~~~~~~~~");
// Question 2
// Iterate 10 to 0 using for loop, do the same using while and do while loop
//
console.log("for loop");
for (let i = 10; i >= 0; i--) {
	console.log(i);
}
console.log("while loop");
let c = 10;
while (c >= 0) {
	console.log(c);
	c--;
}
console.log("do while loop");
let b = 10;
do {
	console.log(b);
	b--;
} while (b >= 0);
console.log("~~~~~~~~~~~~~~");
// Question 3
// Iterate 0 to n using for loop

const nbr = 4;
for (let i = 0; i <= nbr; i++) {
	console.log(i);
}

console.log("~~~~~~~~~~~~~~");
// Question 4
// Write a loop that makes the following pattern using console.log():
//    #
//    ##
//    ###
//    ####
//    #####
//    ######
//    #######
//
for (let ab = 0; ab <= 5; ab++) {
	let str = "";
	for (let ac = 0; ac <= ab; ac++) {
		str += "#";
	}
	console.log(str);
}

console.log("~~~~~~~~~~~~~~");
// Question 5
// Use loop to print the following pattern
//
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
//
for (let o = 0; o <= 10; o++) {
	console.log(`${o} * ${o} = ${o * o}`);
}

console.log("~~~~~~~~~~~~~~");
// Question 6
// Using loop print the following pattern
//
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
//
console.log("n	n^2	n^3");
console.log("");
for (let a = 0; a <= 10; a++) {
	console.log(`${a}	${a ** 2}	${a ** 3}`);
}

console.log("~~~~~~~~~~~~~~");
// Question 7
// Use for loop to iterate from 0 to 100 and print only even numbers
//
console.log("Only even numbers");
for (let s = 0; s <= 100; s++) {
	if (s % 2 === 0) {
		console.log(s);
	}
}

console.log("~~~~~~~~~~~~~~");
// Question 8
// Use for loop to iterate from 0 to 100 and print only odd numbers
//
console.log("Only odd numbers");
for (let ss = 0; ss <= 100; ss++) {
	if (ss % 2 === 1) {
		console.log(ss);
	}
}

console.log("~~~~~~~~~~~~~~");
// Question 9
// Use for loop to iterate from 0 to 100 and print only prime numbers
//
// if you want to see how to work or see steps
//
// http://pythontutor.com
//
// it helped me so much and to know where is going and to see errors too (undefined or NAN or null)
//
console.log("Only prime numbers");
// 1 is considered neither prime nor composite
// All negative numbers are excluded because prime numbers are positive
// Numbers greater than 1 are tested using a for loop.

let si = []
let i;
let j
let pri = [];
let max = 23;
 
// To begin 2 to max 
for (i = 2; i <= max; ++i) {
  
  // If si array is empty - false to true
	//
	// if (!si[3]) -> undefined to true ~ TO PUSH
	// if (!si[4]) -> true to false ~ DON'T PUSH
	// if (!si[5]) -> undefined to true ! TO PUSH
	// if (!si[6]) -> true to false ~ DON'T push
	// if (!si[7]) -> undefined to true ~ TO PUSH 
	// if (!si[8]) -> true to false ~ DON'T PUSH
	//
	if (!si[i]) {
    // i has not been marked -- it is prime 
    // To push to pri array
		// .push(2)
		// .push(5)
		// .push(7)
		// .push(9)
    pri.push(i);
		//
		// j = i << 1
		// j = 2 << 1: 4
		// j = 3 << 1: 6
		// j = 4 << 1: 8
		//
		// si[4]
		// 			0						1					2						3				4
		// [undefined, undefined, undefined, undefined, true]
		//
		// si[6]
		//			0						1					2						3				4				5				6	
		// [undefined, undefined, undefined, undefined, true, undefined, true]
		//
		// si[8]
		//			0						1					2						3				4				5				6					7				8	
		// [undefined, undefined, undefined, undefined, true, undefined, true, undefined, true]
		//
		//
		// si[10]
		//			0						1					2						3				4				5				6					7				8			9		 10
		// [undefined, undefined, undefined, undefined, true, undefined, true, undefined, true, true, true]
		//
		// j += i or j = j + i
		// j += 2 or j = 4 + 2: 6
		// j += 2 or j = 6 + 2: 8
		// j += 2 or j = 8 + 2: 10
		//
		// j <= max
		// 4 <= 100
		// 6 <= 100
		// 8 <= 100
		// 10 <= 100
    for (j = i << 1; j <= max; j += i) {
      si[j] = true;
    }
  }
}
console.log(pri);


console.log("~~~~~~~~~~~~~~");
// Question 10
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//
// The sum of all numbers from 0 to 100 is 5050.
//
let numbersAll = 0;
let number1 = 0;
let number2 = 100;
for (let ab = number1; ab <= number2; ab++) {
	numbersAll += ab;
}
console.log(
	`The sum of all numbers from ${number1} to ${number2} is ${numbersAll}`
);

console.log("~~~~~~~~~~~~~~");
// Question 11
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//
// The sum of all evens from 0 to 100 is 2550.
// The sum of all odds from 0 to 100 is 2500.
//
let numbersAllOdd = 0;
let numbersAllEven = 0;
for (let s = 0; s <= 100; s++) {
	// Only even
	if (s % 2 === 0) {
		numbersAllEven += s;
	}
	// Only odd numbers
	if (s % 2 === 1) {
		numbersAllOdd += s;
	}
}
console.log(`The sum of all evens from 0 to 100 is ${numbersAllEven}`);
console.log(`The sum of all odds from 0 to 100 is ${numbersAllOdd}`);

console.log("~~~~~~~~~~~~~~");
// Question 12
// Use for loop to iterate from 0 to 100 and print the sum of all evens and
// the sum of all odds. Print sum of evens and sum of odds as array
//
// [2550, 2500]
//
let numbersAllOdd1 = 0;
let numbersAllEven1 = 0;
for (let s = 0; s <= 100; s++) {
	// Only even
	if (s % 2 === 0) {
		numbersAllEven1 += s;
	}
	// Only odd numbers
	if (s % 2 === 1) {
		numbersAllOdd1 += s;
	}
}

console.log("[ODDS numbers, EVENS numbers]");
console.log([numbersAllOdd1, numbersAllEven1]);

console.log("~~~~~~~~~~~~~~");
// Question 13
// Develop a small script which generate array of 5 random numbers
//
let numbersArray = [1, 2, 3, 4, 5];
for (let ae = 0; ae < numbersArray.length; ae++) {
	// 0 -> 10
	numbersArray[ae] = Math.floor(Math.random() * 11);
}
console.log(numbersArray);

console.log("~~~~~~~~~~~~~~");
// Question 14
// Develop a small script which generate array of 5 random numbers and the numbers must be unique
//
let numbersArray1 = [];
for (let ae = 0; ae < 6; ae++) {
	// 0 -> 15
	const numbeRandom = Math.floor(Math.random() * 16);

	// Check if array has 0 before check array if there is repeat number
	if (numbersArray1.length === 0) {
		numbersArray1.push(numbeRandom);
		continue;
	}

	let ac;
	for (ac = 0; ac < numbersArray1.length; ac++) {
		// Check each array if number is repeat
		if (numbersArray1[ac] === numbeRandom) {
			// Stop while
			break;
		} else {
			// Check it next array
			continue;
		}
	}
	// Check if number is same number random
	if (numbersArray1[ac] === numbeRandom) {
		// Go to up and check again.
		continue;
	} else {
		// Push to Array if the number random is not repeat
		numbersArray1.push(numbeRandom);
	}
}
console.log(numbersArray1);

console.log("~~~~~~~~~~~~~~");
// Question 15
// Develop a small script which generate a six characters random id:
//
// 5j2khz

const strings =
	"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// [0-9] -> 10 lengths
// [A-Za-z] -> 52 lengths
//
// String to Array with split in characters ~ 'abc' -> ['a', 'b', 'c']
let strToArray = strings.split("");

let str = "";
// Only from 0 to 6
for (let ac = 0; ac < 7; ac++) {
	// random from 0 to 61
	const numberRandom = Math.floor(Math.random() * 62);

	str += strToArray[numberRandom];
}
console.log(str);
