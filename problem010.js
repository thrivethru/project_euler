// Project Euler
// Problem 10
// Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function sumOfArray(values) {
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	console.log("The sum of the values is: " + sum);
	return sum;
}

function isPrime(n) {
	if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
	var m = Math.sqrt(n);
	for (var i = 2; i <= m; i++) if (n % i === 0) return false;
	return true;
}

function buildPrimeList(max) {
	if (isNaN(max) || !isFinite(max) || max % 1 || max < 2) return false;
	var primeList = [];

	for (var i = 2; i <= max; i++) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}

	console.log("The primes equal to or below " + max + " are: " + primeList.join());
	return primeList;
}

sumOfArray(buildPrimeList(2000000));