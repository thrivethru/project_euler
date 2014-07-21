// Project Euler
// Problem 1
// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multiplesOfXandY(x, y, max) {
    var multiples = [];

    function isMultipleOfXOrY(n) {
        if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
        if (n % x === 0) {
        	multiples.push(n);
        } else if (n % y === 0) {
        	multiples.push(n);
        }
    }

    
    for (var n = 1; n < max; n++) {
    	isMultipleOfXOrY(n);
    }

    console.log("The multiples of " + x + " or " + y + " below " + max + " are: " + multiples.join());

    return multiples;
}

function sumOfArray(values) {
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	console.log("The sum of the values is: " + sum);
}

sumOfArray(multiplesOfXandY(3, 5, 1000));

