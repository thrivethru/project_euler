// Project Euler
// Problem 20
// Factorial digit sum

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

function sumOfArray(values) {
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += parseInt(values[i], 10);
	}
	console.log("The sum of the values is: " + sum);
	return sum;
}

// Value get too large to store as a number, so unable to use this function
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

function splitDigits(n) {
	var digits = n.toString().split("");
	digits = digits.reverse();
	for (var i = 0; i < digits.length; i++) {
		digits[i] = parseInt(digits[i], 10);
	}
	console.log("3: " + digits);
	return digits;
}

function multiplyDigits(digits, n) {
	var result = 0;
	var resultDigits = [];
	for (var i = (digits.length - 1); i >= 0; i--) {
		result = n * parseInt(digits[i],10);

		digits[i] = result;

		if (result > 9) {
			resultDigits =  splitDigits(result);
			digits[i] = resultDigits[0];
			for (var j = 1; j < resultDigits.length; j++) {
				if (digits[i + j] >= 0) {
					digits[i + j] = digits[i + j] + resultDigits[j];
					if (digits[i + j] > 9) {
						digits[i + j] = digits[i + j] % 10;
						if (digits[i + j + 1] >= 0) {
							digits[i + j + 1] = digits[i + j + 1] + 1;
						} else {
							digits.push(1);
						}
					}
				}	else {
					digits.push(resultDigits[j]);
				}
			}
		}
	}
	return digits;
}

function factorialDigits(n) {
	var result = [1];

	for (var i = n; i > 0; i--) {
		result = multiplyDigits(result, i);
	}

	return result;
}

function factorialDigitSum(n) {
	var digits = factorialDigits(n);
	console.log("The digits in " + n + "i are " + digits.reverse());
	return sumOfArray(digits);
}

factorialDigitSum(100);