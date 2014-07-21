// Project Euler
// Problem 3
// Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function isPrime(n) {
	if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
	var m = Math.sqrt(n);
	for (var i = 2; i <= m; i++) if (n % i == 0) return false;
	return true;
}

function isPrimeFactor(n, value) {
	if (!isPrime(n)) return false;
	if (value % n === 0) return true;
	return false;
}

function greatestPrimeFactor(value) {
	var currentValue = value;
	var greatestPrimeFactor = 1;
	var n = 1;

	while (currentValue > 1) {
		if (isPrimeFactor(n, currentValue)) {
			greatestPrimeFactor = n;
			currentValue = currentValue / n;
		}
		n++;
	}

	return greatestPrimeFactor;
}

console.log("The greatest prime factor of 600851475143 is: " + greatestPrimeFactor(600851475143));