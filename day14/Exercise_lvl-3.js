const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
	constructor(numbers) {
		this.numbers = numbers;
	}
	count() {
		return this.numbers.length;
	}
	sum() {
		return this.numbers.reduce((acc, cur) => acc + cur, 0);
	}
	min() {
		return Math.min(...this.numbers);
	}
	max() {
		return Math.max(...this.numbers);
	}
	range() {
		return this.max() - this.min();
	}
	mean() {
		return this.sum() / this.count();
	}
	median() {
		const copyNumber = [...this.numbers];
		// Sort by number
		copyNumber.sort((a, b) => a - b);
		//console.log(copyNumber);

		const middle = Math.floor(this.count() / 2);

		// even
		if (this.count() % 2 === 0) {
			return (copyNumber[middle - 1] + copyNumber[middle]) / 2;
			// odd
		} else {
			return copyNumber[middle];
		}
	}
	mode() {
		// unique
		const setNumbers = new Set(this.numbers);
		// copy numbers array
		const copyNumbers = [...this.numbers];
		// new numbers array
		const newArry = [];

		setNumbers.forEach(el => {
			const isFound = copyNumbers.filter(la => la === el);
			// to push to new array
			newArry.push({mode: el, count: isFound.length})
		})
		// sort by numbers
		newArry.sort((a, b) => b.count - a.count);
		return newArry[0]
	}
	var() {
		let sum = 0;
		this.numbers.map(el => {
			sum += (el - this.mean()) ** 2
		})
		return Number.parseFloat(sum / this.count()).toFixed(1);
	}
	std() {
		return Math.sqrt(this.var()).toFixed(1);
	}
	freqDist () {
		// unique
		const setNumbers = new Set(this.numbers);
		// copy numbers array
		const copyNumbers = [...this.numbers];
		// new numbers array
		const newArry = [];
		// new freq array
		const freqArry = [];

		setNumbers.forEach(el => {
			const isFound = copyNumbers.filter(la => la === el);
			// to push to new array
			newArry.push({mode: el, count: isFound.length})
		})
		// sort by numbers
		newArry.sort((a, b) => b.count - a.count);
		
		//console.log(newArry)
		//console.log(this.sum())
		newArry.forEach(el => {
			//console.log(el.count)
			const perce = (el.count / this.count()) * 100;

			freqArry.push({age: el.mode, percentage: perce})
		})
		
		return freqArry 
	}
}

const statistic = new Statistics(ages);

console.log("Count", statistic.count());
console.log("Sum", statistic.sum());
console.log("Min", statistic.min());
console.log("Max", statistic.max());
console.log("Range", statistic.range());
console.log("Mean", statistic.mean());
console.log("Median", statistic.median());
console.log("Mode", statistic.mode());
console.log("Variance", statistic.var());
console.log("Standard Deviation", statistic.std());
console.log("Frequency Distribution", statistic.freqDist())
