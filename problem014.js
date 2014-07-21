// Project Euler
// Problem 14
// Longest Collatz sequence
// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

function calculateNextCollatzNumber(n) {
	var nextCollatzNumber = 0;
	if (n % 2 === 0) {
		nextCollatzNumber = n / 2;
	} else {
		nextCollatzNumber = (3 * n) + 1;
	}
	return nextCollatzNumber;
}

function calculateCollatzChainLength(n) {
	var collatzChainLength = 0;
	var nextCollatzNumber = n;
	var collatzChain = [nextCollatzNumber];

	while (nextCollatzNumber != 1) {
		nextCollatzNumber = calculateNextCollatzNumber(nextCollatzNumber);
		collatzChain.push(nextCollatzNumber);
	}

	collatzChainLength = collatzChain.length;

	return collatzChainLength;
}

function determineLongestCollatzChain(max) {
	var startNumber = 0;
	var chainLength = 0;
	var longestCollatzChain = {
		startNumber: 0,
		collatzChainLength: 0
	};
	for (var i = 1; i <= max; i++) {
		startNumber = i;
		chainLength = calculateCollatzChainLength(startNumber);

		if (chainLength > longestCollatzChain.collatzChainLength) {
			longestCollatzChain.startNumber = startNumber;
			longestCollatzChain.collatzChainLength = chainLength;
		}
	}

	console.log("The longest collatz chain below " + max + " starts at  " + longestCollatzChain.startNumber + " and is " + longestCollatzChain.collatzChainLength + " terms long.");
	return longestCollatzChain;
}

determineLongestCollatzChain(1000000);