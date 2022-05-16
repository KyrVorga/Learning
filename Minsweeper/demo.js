// function generateGrid(size) {
//   let grid = [];
//   for (let i = 0; i < size[0]; i++) {
//     grid.push([]);
//     for (let j = 0; j < size[1]; j++) {
//       Math.random() < 0.30 ? grid[i].push(10) : grid[i].push(0);
//     }
//   }
//   return grid;
// };

// function minesweeper2(grid) {

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < array.length; j++) {
      
//     }
//   }

//   return grid;
// }

// minesweeper2([]);



// const convert = (a, b) => {
//   for (i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] >= a) {
//         grid[i][j] = b;
//       }
//     }
//   }
// };

// function surroundingCells(mines) {
//   const options = [
//     [1, 0],
//     [0, 1],  
//     [1, -1],  
//     [1, 1],  
//     [-1, 0], 
//     [0, -1], 
//     [-1, -1], 
//     [-1, 1], 
//   ];

//   for(let mine of mines) {
//     for (const opt of options) {
//       [row, col] = mine;
//       row += opt[0];
//       col += opt[1];
//       if (row < 4 && row >= 0 && col < 4 && col >= 0) {
//         grid[row][col]++;
//       }
//     }
//   }
// }

// // this can be 
// function mineLocations(grid) {
//   let mines = [];
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] >= 9) {
//         mines.push([i, j]);
//       }
//     }
//   }
//   return mines;
// }

// function minesweeper(array) {
//   grid = [...array];
//   convert(1,9)
//   surroundingCells(mineLocations(grid));
//   convert(9, "x");
//   return grid;
// }

// console.log(
//   minesweeper([
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 1, 0, 1],
//     [1, 1, 0, 0],
//   ])
// );


let array1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]


for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array1.length; j++) {
    // console.log(array1[i][j])
  }
}

array1.forEach(sub => {
  sub.forEach(elem => {
    // console.log(elem);
  })
})









let array = [50, 40, 30, 20, 10];
// Iain coding area (DO NOT TOUCH)

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

for (let element of array) {
  console.log(element)
}

array.forEach((element,i) => {
  console.log(array[i]);
  console.log(element);
})



// let element = () => {
  
// }
