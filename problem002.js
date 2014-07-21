// Project Euler
// Problem 2
// Even Fibonacci numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

function sumOfArray(values) {
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	console.log("The sum of the values is: " + sum);
}

function isEven(n) {
	if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
	if (n % 2 === 0) return true;
}

function fibonacci(max) {
	var fibonacciTerms = [];
  var termLow = 1;
  var termHigh = 2;
  var nextTerm = 0;

  fibonacciTerms.push(termLow, termHigh);

  while (nextTerm <= max) {
		nextTerm = termLow + termHigh;
		termLow = termHigh;
		termHigh = nextTerm;
		if (nextTerm <= max) {
			fibonacciTerms.push(nextTerm);
		}
  }

  console.log("The fibonacci terms below " + max + " are: " + fibonacciTerms.join());

	return fibonacciTerms;
}

function sumOfEvenFibonacciTerms(max) {
	var evenFibonacciTerms = [];
	var fibonacciTerms = fibonacci(max);

	for (var i = 0; i < fibonacciTerms.length; i++) {
		if (isEven(fibonacciTerms[i])) {
			evenFibonacciTerms.push(fibonacciTerms[i]);
		}
	}

	sumOfArray(evenFibonacciTerms);
}

sumOfEvenFibonacciTerms(4000000);

