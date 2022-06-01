function minesweeper(array) {
  // make a copy of array called grid
  grid = [...array];

  // this is an array of co-ordinates of all adjacent cells
  const options = [
    [1, 0], //bottom
    [0, 1], //right
    [1, -1], //bottom left
    [1, 1], //bottom right
    [-1, 0], //top
    [0, -1], //left
    [-1, -1], //top left
    [-1, 1], //top right
  ];

  // convert all of the 1's in grid to 10's
  convert(1, 10);

  // assign the result of mineLocations to mines and pass it into surrodingCells
  let mines = mineLocations(grid);
  surroundingCells(mines, options);

  // convert all cells greater than 10 into an 'x'
  convert(10, "x");
  return grid;
}

// converts a into b (first used to change 1's into 10's, then to change anything above 10 into an x)
const convert = (a, b) => {
  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col >= a) {
        grid[i][j] = b;
      }
    });
  });
};

// returns an array of arrays, each array is a [row,col] pair for a mine in the grid
function mineLocations(grid) {
  let mines = [];
  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col > 9) {
        mines.push([i, j]);
      }
    });
  });
  return mines;
}
/* 
loops through all of the mine locations generated by mineLocations
checks if the surronding cell is within the bounds of the grid, not less than 0 or greater than 3
if that check passes the cell gets incremented
*/
function surroundingCells(mines, options) {
  mines.forEach((mine) => {
    options.forEach((elem) => {
      [row, col] = mine;
      row += elem[0];
      col += elem[1];
      if (row < 4 && row >= 0 && col < 4 && col >= 0) {
        grid[row][col]++;
      }
    });
  });
}

console.log(
  minesweeper([
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ])
);