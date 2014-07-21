// Project Euler
// Problem 16
// Power digit sum
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

function sumOfArray(values) {
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	console.log("The sum of the values is: " + sum);
}

// function below works with smaller exponents, but gets too large to store value as a number
// function powerDigitSum(b, e) {
// 	var value = Math.pow(b, e);
// 	console.log(value);
// 	value = value.toString();
// 	console.log(value);
// 	var digits = value.split("");
// 	for (var i = 0; i < digits.length; i++) {
// 		digits[i] = parseInt(digits[i], 10);
// 	}
// 	sumOfArray(digits);
// }

// powerDigitSum(2, 1000);

function doubleDigits(digits) {
	for (var i = (digits.length - 1); i >= 0; i--) {
		digits[i] = 2 * digits[i];
		if (digits[i] > 9) {
			digits[i] = digits[i] % 10;
			if (digits[i + 1] >= 0) {
				digits[i + 1] = digits[i + 1] + 1;
			} else {
				digits.push(1);
			}
		}
	}
	return digits;
}

function powerDigit(e) {
	var result = [2];

	for (var i = 1; i < e; i++) {
		result = doubleDigits(result);
	}
	return result;
}

function powerDigitSum(e) {
	var digits = powerDigit(e);
	console.log(digits);
	sumOfArray(digits);
}

powerDigitSum(1000);
