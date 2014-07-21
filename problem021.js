// Project Euler
// Problem 21
// Amicable numbers

// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

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

function amicablePair(n) {
	var sum1 = d(n);
	if (sum1 === n) return false;
	var sum2 = d(sum1);
	if (n === sum2) return true;
	return false;
}

function enumerateAmicableNumbers(n) {
	var amicableNumbers = [];
	for (var i = 1; i < n; i++) {
		if (amicablePair(i)) amicableNumbers.push(i);
	}
	console.log(amicableNumbers);
	return amicableNumbers;
}

function sumAmicableNumbers(n) {
	var sum = sumOfArray(enumerateAmicableNumbers(n));
	console.log("The sum of all amicable numbers below " + n + " is " + sum);
	return sum;
}

sumAmicableNumbers(10000);