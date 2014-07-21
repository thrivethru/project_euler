// Project Euler
// Problem 9
// Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


// 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// 3 + 4 + 5 = 12
// 30 40 50
// 900 

//  9
//   5 6 7
//   25 36 49

// 225^2 = 50625
// a^2 + b^2 - c^2 = 0

// a = n^2 - m^2
// b = 2nm
// c = n^2 + m^2

// m < 2
function generatePythagoreanTriplet(m, n) {
	var triplet = [3,4,5];

	triplet[0] = Math.pow(n, 2) - Math.pow(m, 2);
	triplet[1] = 2 * n * m;
	triplet[2] = Math.pow(n, 2) + Math.pow(m, 2);

	console.log("The generated Pythagorean triplet for m = " + m + " and n = " + n + " is " + triplet.join());
	return triplet;
}

function sumOfArray(values) {
	var sum = 0;
	for (var i = 0; i < values.length; i++) {
		sum += values[i];
	}
	console.log("The sum of the values is: " + sum);
	return sum;
}

function productOfArray(values) {
	var product = 1;
	for (var i = 0; i < values.length; i++) {
		product *= values[i];
	}
	console.log("The product of the values is: " + product);
	return product;
}


function pythagoreanTripletSum1000() {
	var sum = 0;
	var triplet = [3, 4, 5];
	for (var i = 1; i < 1000; i++) {
		for (var j = i + 1; j < 1000; j++) {
			triplet = generatePythagoreanTriplet(i, j);
			sum = sumOfArray(triplet);
			if (sum === 1000) {
				return triplet;
			}
		}
	}
	return triplet;
}

function productOfPythagoreanTriplet() {
 var triplet = pythagoreanTripletSum1000();
 var product = productOfArray(triplet);
}

productOfPythagoreanTriplet();
