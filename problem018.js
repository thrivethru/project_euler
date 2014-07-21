// Project Euler
// Problem 18
// Maximum path sum I
// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

//    3
//   7 4
//  2 4 6
// 8 5 9 3

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom of the triangle below:

//               75
//              95 64
//             17 47 82
//            18 35 87 10
//           20 04 82 47 65
//          19 01 23 75 03 34
//         88 02 77 73 07 63 67
//				99 65 04 28 06 16 70 92
//       41 41 26 56 83 40 80 70 33
//			41 48 72 33 47 32 37 16 94 29
//     53 71 44 65 25 43 91 52 97 51 14
//		70 11 33 28 77 73 17 78 39 68 17 57
//   91 71 52 38 17 14 91 43 58 50 27 29 48
//	63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

// NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)


// 1. Convert triangle into an array
// 2. Start at second to last row
// 3. Compare (r + 1)(i) and (r +1)(i +1) 
// 4. Add greater to i and make i equal the result
// 5. Iterate through row then move to above row

function createTriangleArray(triangle) {
	var triangleArray = [];
	var triangleRows = triangle.split("/");
	for (var i = 0; i < triangleRows.length; i++) {
		triangleArray.push(triangleRows[i].split(" "));
	}
	return triangleArray;
}

function greaterNumber(n1, n2) {
	if (n2 > n1) {
		return n2;
	}
	return n1;
}

function calculateSum(triangle) {
	// declare variable greatestProduct and assign it the value of 1
	var greatestSum = 0;
	for (var r = (triangle.length - 2); r >= 0; r--) {
		for (var c = 0; c < triangle[r].length; c++) {
			var current = parseInt(triangle[r][c], 10);
			var n1 = parseInt(triangle[r + 1][c], 10);
			var n2 = parseInt(triangle[r + 1][c + 1], 10);
			var greater = greaterNumber(n1,n2);
			current += greater;
			triangle[r][c] = current;
			console.log(triangle[r][c]);
		}
	}
	greatestSum = triangle[0][0];

	return greatestSum;
}



function maximumPathSum() {
	var triangle = "75/95 64/17 47 82/18 35 87 10/20 04 82 47 65/19 01 23 75 03 34/88 02 77 73 07 63 67/99 65 04 28 06 16 70 92/41 41 26 56 83 40 80 70 33/41 48 72 33 47 32 37 16 94 29/53 71 44 65 25 43 91 52 97 51 14/70 11 33 28 77 73 17 78 39 68 17 57/91 71 52 38 17 14 91 43 58 50 27 29 48/63 66 04 68 89 53 67 30 73 16 69 87 40 31/04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";
	var triangleArray = createTriangleArray(triangle);
	console.log("The triangle is " + triangle);
	console.log("The triangleArray is " + triangleArray);
	var maximumSum = calculateSum(triangleArray);

	console.log("The maximum path sum of the triangle is " + maximumSum);
}

maximumPathSum();