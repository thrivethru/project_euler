// Project Euler
// Problem 17
// Number letter counts
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

function sumOfArray(values) {
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	console.log("The sum of the values is: " + sum);
}

function lessThan10(n) {
	switch (n) {
		case 1:
			return "one";
		case 2:
			return "two";
		case 3:
			return "three";
		case 4:
			return "four";
		case 5:
			return "five";
		case 6:
			return "six";
		case 7:
			return "seven";
		case 8:
			return "eight";
		case 9:
			return "nine";
		default:
			return "";
	}
}

function teen(n) {
	switch (n) {
		case 10:
			return "ten";
		case 11:
			return "eleven";
		case 12:
			return "twelve";
		case 13:
			return "thirteen";
		case 14:
			return "fourteen";
		case 15:
			return "fifteen";
		case 16:
			return "sixteen";
		case 17:
			return "seventeen";
		case 18:
			return "eighteen";
		case 19:
			return "nineteen";
		default:
			return false;
	}
}

function tens(n) {
	var words = "";

	if (n > 89) {
		words += "ninety";
	} else if (n > 79) {
		words += "eighty";
	} else if (n > 69) {
		words += "seventy";
	} else if (n > 59) {
		words += "sixty";
	} else if (n > 49) {
		words += "fifty";
	} else if (n > 39) {
		words += "forty";
	} else if (n > 29) {
		words += "thirty";
	} else if (n > 19) {
		words += "twenty";
	} else if (n > 9) {
		return teen(n);
	} else {
		words += "";
	}

	if (n % 10 === 0) return words;
	words += convertNtoWords(n % 10);
	return words;
}

function hundreds(n) {
	var words = "";
	var hundred = parseInt(n/100, 10);
	words += convertNtoWords(hundred);
	words += "hundred";
	if (n % 100 === 0) return words;
	words += "and";
	words += convertNtoWords(n % 100);
	return words;
}

function convertNtoWords(n) {
	var numberInWords = "";
	if (n === 1000) {
		numberInWords += "onethousand";
	} else if (n > 99) {
		numberInWords += hundreds(n);
	} else if (n > 9) {
		numberInWords += tens(n);
	} else if (n > 0) {
		numberInWords += lessThan10(n);
	} else {
		numberInWords += "";
	}
	return numberInWords;
}

function convert1to1000IntoWordLengthsAndSum() {
	var numberWordLengths = [];
	for (var i = 1; i <= 1000; i++) {
		numberWordLengths.push(
			convertNtoWords(i).split("").length
		);
	}
	return sumOfArray(numberWordLengths);
}

convert1to1000IntoWordLengthsAndSum();