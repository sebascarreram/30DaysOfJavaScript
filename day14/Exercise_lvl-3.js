const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
	constructor(numbers){
		this.numbers = numbers;
	}
	count() {
		return this.numbers.length;
	}
	sum(){
		return this.numbers.reduce((acc, cur) => acc + cur, 0);
	}
	min(){
		return Math.min(...this.numbers);
	}
	max(){
		return Math.max(...this.numbers);
	}
	range(){
		return this.max() - this.min();
	}
	mean(){
		return this.sum() / this.count();
	}
}

const statistic = new Statistics(ages);

console.log("Count", statistic.count());
console.log("Sum", statistic.sum());
console.log("Min", statistic.min());
console.log("Max", statistic.max());
console.log("Range", statistic.range());
console.log("Mean", statistic.mean());
