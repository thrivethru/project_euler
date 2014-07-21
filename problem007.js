// Project Euler
// Problem 7
// 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?


function isPrime(n) {
	if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
	var m = Math.sqrt(n);
	for (var i = 2; i <= m; i++) if (n % i === 0) return false;
	return true;
}

function findNthPrime(n) {
	if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
	var primeList = [];
	var nthPrime = 0;

	for (var i = 2; primeList.length < n; i++) {
		if (isPrime(i)) {
			primeList.push(i);
		}
		if (primeList.length === n) {
			nthPrime = i;
		}
	}

	console.log("The " + n + " prime is: " + nthPrime);
	return nthPrime;
}

findNthPrime(10001);