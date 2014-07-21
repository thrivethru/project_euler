// Project Euler
// Problem 6
// Sum square difference
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.




// 1. Find sum of the numbers up to max
// 2. Square this sum1
// 3. Loop through 1 to max squaring each, then add to sum2
// 4. Find difference between square of sum1 and sum2

function sumOfNaturalNumbersToMax(max) {
	var sum = 0;

	for (var i = 1; i <= max; i++) {
		sum = sum + i;
	}

	return sum;
}

function squareOfTheSum(max) {
	var square = 0;
	square = Math.pow(sumOfNaturalNumbersToMax(max), 2);

	return square;
}

function sumOfSquaresOfNaturalNumbersToMax(max) {
	var sum = 0;

	for (var i = 1; i <= max; i++) {
		var square = Math.pow(i, 2);
		sum = sum + square;
	}

	return sum;
}

function sumSquareDifference(max) {
	var difference = 0;

	difference = squareOfTheSum(max) - sumOfSquaresOfNaturalNumbersToMax(max);

	console.log("The difference between the sum of the squares of the first " + max + " natural numbers and the square of the sum is " + difference);
	return difference;
}

sumSquareDifference(100);