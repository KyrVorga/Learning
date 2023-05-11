//ANCHOR - Coding Challenge
// iterate over a 2D array
// for every cell, add 1 to each surrounding/neighbouring cell.
// Watch out for out-of-bounds errors.

let grid = [
	[0, 0, 0, 0, 9, 0, 9, 0],
	[9, 0, 9, 0, 9, 0, 9, 0],
	[0, 9, 0, 0, 0, 0, 0, 9],
	[0, 0, 9, 0, 9, 0, 9, 0],
];

const coordinates = [
	[1, 0],
	[0, 1],
	[1, -1],
	[1, 1],
	[-1, 0],
	[0, -1],
	[-1, -1],
	[-1, 1],
];

for (let i = 0; i < grid.length; i++) {
	for (let j = 0; j < grid[i].length; j++) {
		for (let k = 0; k < coordinates.length; k++) {
			const [row, col] = coordinates[k];

			if (
				i + row >= 0 &&
				i + row < grid.length &&
				j + col >= 0 &&
				j + col < grid[i].length
			) {
				//console.log(grid[i + row][j + col]);
				grid[i + row][j + col]++;
			}
		}
	}
}

for (let i = 0; i < grid.length; i++) {
	for (let j = 0; j < grid[i].length; j++) {
		if (grid[i][j] >= 9) {
			grid[i][j] = "Orange";
		}
	}
}
console.log(grid);
