// Project Euler
// Problem 5
// Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// 1 2 5 7 11 13 17 19 23 29

// 2520
// 2 1260
// 	10 126
// 2 5  2 63
// 			3 21	
// 				3 7

// 2 2 2 3 3 5 7


// 2 2
// 3 3 
// 4 2 2
// 5 5 
// 6 2 3
// 7 7 
// 8 2 2 2
// 9 3 3
// 10 2 5
// 11 11
// 12 2 2 3
// 13 13
// 14 2 7
// 15 3 5
// 16 2 2 2 2
// 17 17
// 18 2 3 3
// 19 19
// 20 2 2 5

// 2 2 2 2 3 3 5 7 11 13 17 19

// Answer: 232792560

// 1. Find primes up to n
// 2. Push primes to primeList
// 3. Copy primeList to factorList
// 4. Iterate through primes up to sqrt of n
// 5. Increment power on each until result is more than n
// 6. Push the prime to factorList (power - 1) times
// 7. Iterate through factorlist multiplying product by each.
// 8. Print result




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

function buildFactorList(max) {
	var primeList = buildPrimeList(max);
	var factorList = primeList.slice(0);
	var extraFactors = [];
	var m = Math.sqrt(max);

  var i = 0;
  nextPrimeFactor = primeList[i];

	while (nextPrimeFactor < m) {
		var factor = nextPrimeFactor;
		var product = factor;
		var power = 1;

		while (product < max) {
			product = product * factor;
			if (product < max) {
				power++;
			}
		}

		if (power > 1) {
			for (var p = power; p > 1; p--) {
				factorList.push(factor);
			}
		}
		i++;
		nextPrimeFactor = primeList[i];
	}

	console.log("The list of factors for the numbers from 1 to " + max + " are: " + factorList.join());
	return factorList;
}

function smallestMultiple(max) {
	if (isNaN(max) || !isFinite(max) || max % 1 || max < 2) return false;

	var factorList = buildFactorList(max).slice(0);
	var product = 1;
	for (var i = 0; i < factorList.length; i++) {
		product = product * factorList[i];
	}

	return product;
}

console.log("The smallest positive number that is evenly divisible by all of the numbers from 1 to " + 20 + " is " + smallestMultiple(20));