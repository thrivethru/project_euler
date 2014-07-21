// Project Euler
// Problem 4
// Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


function isPalindrome(n) {
	var value = n.toString();
	var reversed = value.split("").reverse().join("");
	if (value === reversed) {
		return true;
	}
	return false;
}

function largestPalindromeProduct() {
	var largestPalindromeProduct = 0;
	var factorX = 0;
	var factorY = 0;
	var floor = 0;

	for (var x = 999; (x >= 100 && x > floor); x--) {
		for (var y = 999; (y >= 100 && y > floor); y--) {
			var product = x * y;
			if (isPalindrome(product) && product > largestPalindromeProduct) {
				largestPalindromeProduct = product;
				factorX = x;
				factorY = y;
				floor = y;
			}
		}
	}
	console.log("The largest palindrome product of two 3-digit numbers is " + largestPalindromeProduct + ", the product of " + factorX + " and " + factorY);
}
largestPalindromeProduct();