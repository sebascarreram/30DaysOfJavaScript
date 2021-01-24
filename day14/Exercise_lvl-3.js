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
		console.log(copyNumber);

		const middle = Math.floor(this.count() / 2);

		// even
		if (this.count() % 2 === 0) {
			return (copyNumber[middle - 1] + copyNumber[middle]) / 2;
			// odd
		} else {
			return copyNumber[middle];
		}
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
