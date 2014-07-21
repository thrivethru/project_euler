// Project Euler
// Problem 23
// Non-abundant sums
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.


// 1. Loop through all numbers to 28123, test if abundant number, if so push to abundant numbers array
// 2. Loop through abundant number array and sum each value with itself and every higher value in the array, push each sum to abundant sums array

function sumOfArray(values) {
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	return sum;
}

function isFactor(n1, n2) {
	if (n1 % n2 === 0) return true;
	return false;
}

function d(n) {
	var sum = 0;
	var factors = [];
	for (var i = 1; i <= n/2; i++) {
		if (isFactor(n, i)) factors.push(i);
	}
	sum = sumOfArray(factors);
	return sum;
}

function isAbundantNumber(n) {
	var sum = d(n);
	if (sum > n) return true;
	return false;
}

function enumerateAbundantNumber(n) {
	var abundantNumbers = [];
	for (var i = 1; i < n; i++) {
		if (isAbundantNumber(i)) abundantNumbers.push(i);
	}
	return abundantNumbers;
}

function enumerateNonAbundantSums() {
	var max = 28134 ;
	var abundantNumbers = enumerateAbundantNumber(max);
	var nonAbundantSums = [];
	for (var i = 0; i <= max; i++) {
		nonAbundantSums.push(i);
	}
	for (var j = 0; j < abundantNumbers.length; j++) {
		for (k = j; k < abundantNumbers.length; k++) {
			var sum = abundantNumbers[j] + abundantNumbers[k];
			if (sum <= nonAbundantSums.length) {
				nonAbundantSums[sum] = 0;
			}
		}
	}
	return nonAbundantSums;
}

function sumNonAbundantSums() {
	var nonAbundantSums = enumerateNonAbundantSums();
	var sum = sumOfArray(nonAbundantSums);
	return sum;
}

console.log(sumNonAbundantSums());