function minesweeper(array) {
  grid = [...array];
  const options = [
    [1, 0],
    [0, 1],
    [1, -1],
    [1, 1],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [-1, 1],
  ];

  const convert = (a, b) => {
    for (row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] >= a) {
          grid[row][col] = b;
        }
      }
    }
  };
  convert(1, 10);

  let mines = mineLocations(grid);
  let cells = surroundingCells(mines, options);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      for (c = 0; c < cells.length; c++) {
        if (JSON.stringify([i, j]) == JSON.stringify(cells[c])) {
          grid[i][j]++;
        }
      }
    }
  }
  convert(10, "x");
  return grid;
}

function mineLocations(grid) {
  let mines = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] >= 10) {
        mines.push([i, j]);
      }
    }
  }
  return mines;
}

function surroundingCells(mines, options) {
  cells = [];
  for (let i = 0; i < mines.length; i++) {
    for (let j = 0; j < options.length; j++) {
      let row, col;
      [row, col] = mines[i];
      row += options[j][0];
      col += options[j][1];
      cells.push([row, col]);
    }
  }
  return cells;
}

// console.log(
//   minesweeper([
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 1, 0, 1],
//     [1, 1, 0, 0],
//   ])
// );
console.log(
  minesweeper([
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 1, 0, 1, 0],
  ])
);
