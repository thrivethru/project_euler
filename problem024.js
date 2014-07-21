// Project Euler
// Problem 24
// Lexicographic permutations
// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

function factorial(n) {
	// If the number is less than 0, reject it.
	if (n < 0) {
		return -1;
	}
	// If the number is 0, its factorial is 1.
	else if (n === 0) {
		return 1;
	}
	// Otherwise, call this recursive procedure again.
	else {
		return (n * factorial(n - 1));
	}
}

function calculatePosition(p) {}

function calculateNthPermutaion(n, digits) {
	if (factorial(digits.length) < n) return false;
	var permutation = [];
	var remainingDigits = digits.sort();
	var currentNthPermutation = 0;  // current nth lexicographic permutation
	var nextNthPermutation = 0;			// next nth lexicographic permutation
	var positions = digits.length;
	for (var p = 0; p < positions; p++) {
		console.log("p is " + p);
		currentDigit = 0;
		nextNthPermutation = factorial(remainingDigits.length - 1) + currentNthPermutation;
		while (nextNthPermutation < n) {
			currentDigit++;
			currentNthPermutation = nextNthPermutation;
			console.log("currentNthPermutation is " + currentNthPermutation);
			console.log("currentDigit is " + currentDigit);
			nextNthPermutation = factorial(remainingDigits.length - 1) + currentNthPermutation;
		}
		permutation.push(remainingDigits[currentDigit]);
		remainingDigits.splice(currentDigit, 1);
		console.log("remainingDigits is " + remainingDigits);
		console.log("permutation is " + permutation);
	}
  console.log("currentNthPermutation is " + currentNthPermutation);
	return permutation;
}


function millionthPermutation() {
	var digits = [0,1,2,3,4,5,6,7,8,9];
	var n = 1000000;

	console.log("The millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 is " + calculateNthPermutaion(n, digits));
}

//0123 0132 0213 0231 0312 0321

millionthPermutation();