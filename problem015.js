// Project Euler
// Problem 15
// Lattice paths
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

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

function countRoutes(rows, columns) {

	routes = ((factorial(rows + columns)/factorial((rows + columns) - columns))/factorial(columns));

	console.log("There are " + routes + " possible routes in a " + rows + " by " + columns + " grid.");
	return routes;
}

countRoutes(20,20);