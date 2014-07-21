// Project Euler
// Problem 11
// Largest product in a grid
// In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
//			00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19
// 00 - 08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
// 01 - 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
// 02 - 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
// 03 - 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
// 04 - 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
// 05 - 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
// 06 - 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
// 07 - 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
// 08 - 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
// 09 - 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
// 10 - 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
// 11 - 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
// 12 - 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
// 13 - 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
// 14 - 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
// 15 - 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
// 16 - 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
// 17 - 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
// 18 - 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
// 19 - 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
// The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

// What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?



// Diagonal
// 
// iterate through rows grid.length - d times
// ---down to right
// assign product as 1
// start at row 0 col 0 multiply product by value
// add 1 to row and col d times multiply product by each value
// compare product with greatest value and assign product as greatest value if it is greater 
// iterate to next colum until grid[i].length - d
// ---down to left
// assign product as 1
// start at row 0 col 0 + d multiply product by value
// subtract 1 from row and col d times multiply product by each value
// compare product with greatest value and assign product as greatest value if it is greater 
// move to next row 



var grid = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08/49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00/81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65/52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91/22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80/24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50/32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70/67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21/24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72/21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95/78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92/16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57/86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58/19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40/04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66/88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69/04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36/20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16/20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54/01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48";

function createGridArray(grid) {
	var gridArray = [];
	var gridRows = grid.split("/");
	for (var i = 0; i < gridRows.length; i++) {
		gridArray.push(gridRows[i].split(" "));
	}
	return gridArray;
}

function greaterNumber(n1, n2) {
	if (n2 > n1) {
		return n2;
	}
	return n1;
}

function greatestProductInHorizontal(d, grid) {
	var greatestProduct = 1;
	for (var h = 0; h < grid.length; h++) {
		for (var i = 0; i < (grid[h].length - d); i++) {
			var product = 1;
			for (var j = i; j < (i + d); j++) {
				product = product * grid[h][j];
			}
			greatestProduct = greaterNumber(greatestProduct, product);
		}
	}
 return greatestProduct;
}

function greatestProductInVertical(d, grid) {
	var greatestProduct = 1;
	for (var i = 0; i <= grid.length - d; i++) {
		for (var j = 0; j <= grid[i].length; j++) {
			var product = 1;
			for (var k = i; k < (i + d); k++) {
				product = product * grid[k][j];
			}
			greatestProduct = greaterNumber(greatestProduct, product);
		}
	}
	return greatestProduct;
}

function greatestProductInDiagonal(d, grid) {
	// declare variable greatestProduct and assign it the value of 1
	var greatestProduct = 1;
	var product = 1;
	var k = 0;
	// iterate through rows grid.length - d times
	for (var i = 0; i <= (grid.length - d); i++) {
		// ---down to right
		// start at row 0 col 0 
		// iterate through columns until grid[i].length - d
		for (var j = 0; j <= (grid[i].length - d); j++) {
			// assign product as 1
			product = 1;
			k = i;
			// add 1 to row and col d times multiply product by each value
			for (var l = j; l < (j + d); l++) {
				// multiply product by value
				product = product * grid[k][l];
				//console.log("value at " + k + l + " is " + grid[k][l]);
				//console.log("diagonal down to right product is " + product);
				k++;
			}
			// compare product with greatest value and assign product as greatest value if it is greater 
			greatestProduct = greaterNumber(greatestProduct, product);
		}
		// ---down to left
		// iterate through columns starting at grid[i].length - 1 until 0 + d
		for (var m = (grid[i].length - 1); m >= (0 + d); m--) {
			// assign product as 1
			product = 1;
			k = i;
			// add 1 to row and subtract 1 from col d times multiply product by each value
			for (var n = m; n > (m - d); n--) {
				// multiply product by value
				product = product * grid[k][n];
				console.log("value at " + k + n + " is " + grid[k][n]);
				console.log("diagonal down to left product is " + product);
				k++;
			}
			// compare product with greatest value and assign product as greatest value if it is greater 
			greatestProduct = greaterNumber(greatestProduct, product);
		}
	// move to next row 
	}

	// return result
	return greatestProduct;
}


function greatestProductOfNConsecutiveDigits(d, grid) {
	var gridArray = createGridArray(grid);
	var greatestProduct = 1;

	// for horizontal greatestProduct
	greatestProduct = greaterNumber(greatestProduct, greatestProductInHorizontal(d, gridArray));

	// for vertical greatestProduct
	greatestProduct = greaterNumber(greatestProduct, greatestProductInVertical(d, gridArray));

	//for diagonal greatestProduct
	greatestProduct = greaterNumber(greatestProduct, greatestProductInDiagonal(d, gridArray));



	console.log("The overall greatest product of " + d + " consecutive digits is " + greatestProduct);
	return greatestProduct;
}

greatestProductOfNConsecutiveDigits(4, grid);