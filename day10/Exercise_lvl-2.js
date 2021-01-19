const a = [4, 5, 4, 8, 9];
const b = [3, 4, 5, 7];

// numbers unique in each variable
// NOT REPEAT
const setA = new Set(a);
const setB = new Set(b);

console.log("~~~")
console.log("Set A");
console.log(setA);
console.log("Set B");
console.log(setB);
console.log("~~~")

console.log("~~~~~~~~~~~~~~~");
// Question 1
// Find a union b
//
const c = [...setA, ...setB];
const setC = new Set(c);
console.log(setC)
console.log("~~~~~~~~~~~~~~~");
// Question 2
// Find a intersection b
//
const setInter = new Set();
// setB -> ab
for (const b of setB) {
	// true or false
	if (setA.has(b)) {
		setInter.add(b);
	}
}
console.log(setInter);
console.log("~~~~~~~~~~~~~~~");
// Question 3
// Find a with b
//

const setDifference = new Set();
// copy
const setCopyA = new Set(setA);

for (const b of setB) {
	// true or false
	if (setCopyA.has(b)) {
		setCopyA.delete(b);
	} else {
		setCopyA.add(b);
	}
}
console.log(setCopyA);
