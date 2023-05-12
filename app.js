const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

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

// Create a 2D array of objects
const generateGrid = (size) => {
	let grid = [];

	for (let i = 0; i < size; i++) {
		grid.push([]);
		for (let j = 0; j < size; j++) {
			grid[i][j] = {
				status: "hidden", // revealed | flagged | hidden
				isMine: false, // true | false
			};
		}
	}
	return grid;
};

const formatGrid = (grid) => {
	process.stdout.write("     ");
	for (let i = 0; i < grid[0].length; i++) {
		process.stdout.write(`${i}   `);
	}

	for (let i = 0; i < grid.length; i++) {
		process.stdout.write(`\n${i} | `);
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j].status == "revealed") {
				process.stdout.write(`[${grid[i][j].mineCount}] `);
			} else if (grid[i][j].status == "hidden") {
				process.stdout.write("[ ] ");
			} else {
				process.stdout.write("[X] ");
			}
		}
	}
	console.log("\n");
};

const getInput = async (min, max, message) => {
	const rl = readline.createInterface({ input, output });
	let userInput = await rl.question(`${message}\n  > `);
	rl.close();

	// this needs to properly reject string values
	if (
		userInput.match(/\D/) ||
		userInput === "" ||
		Number(userInput) < min ||
		Number(userInput) > max
	) {
		console.log("Invalid input, please try again.");
		userInput = await getInput(min, max, message);
		rl.close();
	}
	return Number(userInput);
};

const addMines = (grid, row, col) => {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			let isMine = Math.random() < 0.1 ? 9 : 0;
			grid[i][j].isMine = isMine ? true : false;
			grid[i][j].mineCount = isMine;
		}
	}
	grid[row][col].isMine = false;
	grid[row][col].mineCount = 0;
};

const adjacentCells = (grid) => {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j].mineCount > 8) {
				coordinates.forEach((coord) => {
					if (
						i + coord[0] < grid.length &&
						i + coord[0] >= 0 &&
						j + coord[1] < grid[i].length &&
						j + coord[1] >= 0
					) {
						grid[i + coord[0]][j + coord[1]].mineCount++;
					}
				});
			}
		}
	}
};

const revealCell = (grid, row, col) => {
	if (grid[row][col].isMine == true) {
		console.log("\n\n\nEXPLOOOOSION!!!");
	} else {
		grid[row][col].status = "revealed";
		if (grid[row][col].mineCount == 0) {
			revealNearbyBlankCells(grid, row, col);
		}
	}
};

const flagCell = (grid, row, col) => {
	grid[row][col].status = "flagged";
};

const revealNearbyBlankCells = (grid, row, col) => {
	coordinates.forEach((coord) => {
		if (
			row + coord[0] < grid.length &&
			row + coord[0] >= 0 &&
			col + coord[1] < grid[row].length &&
			col + coord[1] >= 0
		) {
			let cell = grid[row + coord[0]][col + coord[1]];
			// console.log(cell);
			if (cell.status != "revealed") {
				grid[row + coord[0]][col + coord[1]].status = "revealed";
				if (cell.mineCount == 0) {
					revealNearbyBlankCells(
						grid,
						row + coord[0],
						col + coord[1]
					);
				}
			}
		}
	});
};

const checkWin = (grid) => {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j].status == "hidden" && grid[i][j].isMine == false) {
				return false;
			}
		}
	}
	return true;
};

(async () => {
	// generate the grid
	let grid = generateGrid(3);
	// display the board to the user
	formatGrid(grid);
	// ask the player to select a cell
	console.log("Select a cell to begin the game.");
	let row = await getInput(0, grid.length, "Which row?");
	let col = await getInput(0, grid.length, "Which column?");
	// console.log(row, col);
	// console.log(grid[row][col]);

	//add mines to the grid
	addMines(grid, row, col);
	// console.log(grid);
	adjacentCells(grid);
	// console.log(grid);
	// reveal that square and any nearby blanks
	revealCell(grid, row, col);
	formatGrid(grid);
	// repeat game loop until a mine is found or game is won
	let gameFlag = true;
	while (gameFlag) {
		let choice = await getInput(
			1,
			3,
			"What action would you like to perform?\n1 - Reveal Cell\n2 - Flag Cell\n3 - Quit"
		);
		if (choice === 3) {
			gameFlag = false;
		} else {
			let row = await getInput(0, grid.length, "Which row?");
			let col = await getInput(0, grid.length, "Which column?");
			if (choice === 1) {
				revealCell(grid, row, col);
			} else {
				flagCell(grid, row, col);
			}
			formatGrid(grid);
		}
		if (checkWin(grid) === true) {
			gameFlag = false;
			console.log("\n\n\nYOU WIN!!!");
		}
	}

	// console.log(grid);
})();
