// Project Euler
// Problem 25
// 1000-digit Fibonacci number
// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the first term in the Fibonacci sequence to contain 1000 digits?

function sumTwoArrays(termLow, termHigh) {
	var term1 = termLow.slice();
	var term2 = termHigh.slice();
	for (var i = 0; i < term1.length; i++) {
		term2[i] += term1[i];
		if (term2[i] > 9) {
			term2[i] = term2[i] % 10;
			if (term2[i + 1] >= 0) {
				term2[i + 1] = term2[i + 1] + 1;
			} else {
				term2.push(1);
			}
		}
	}
	//console.log("The sum of the two arrays is: " + term2);
	return term2;
}

function fibonacciDigits(fibonacciTerms, nDigits) {
	var nextTerm = sumTwoArrays(fibonacciTerms[fibonacciTerms.length - 2], fibonacciTerms[fibonacciTerms.length - 1]).slice();
	fibonacciTerms.push(nextTerm);
	if (nextTerm.length < nDigits) {
		return fibonacciDigits(fibonacciTerms, nDigits);
	}
	console.log("The first term in the Fibonacci sequence to contain " + nDigits + " digits is term " + fibonacciTerms.length + " which is " + nextTerm.reverse().join(""));
	return nextTerm.reverse().join("");
}

fibonacciDigits([[1], [1]], 1000);
