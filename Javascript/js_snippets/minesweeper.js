// [
//   [0, 1, 0, 0],
//   [0, 0, 1, 0],
//   [0, 1, 0, 1],
//   [1, 1, 0, 0],
// ];
// Into
// [
//   [1, x, 2, 1],
//   [2, 3, x, 2],
//   [3, x, 4, x],
//   [x, x, 3, 1],
// ];

// function checker(x, y, array) {
//   //location is equal to j and i to see if x is on the edge of the grid
//   if (x == 0 && y == 0) {
//     // console.log("top left corner");
//     array[j][i + 1]++;
//     array[j + 1][i + 1]++;
//     array[j + 1][i]++;
//   } else if (x == 0 && y == 3) {
//     // console.log("top right");
//     array[j][i - 1]++;
//     array[j + 1][i]++;
//     array[j + 1][i - 1]++;
//   } else if ((x == 0 && y == 1) || (x == 0 && y == 2)) {
//     // console.log("top center");
//     array[j][i - 1]++;
//     array[j][i + 1]++;
//     array[j + 1][i + 1]++;
//     array[j + 1][i]++;
//     array[j + 1][i - 1]++;
//   } else if ((x == 1 && y == 0) || (x == 2 && y == 0)) {
//     // console.log("left center");
//     array[j - 1][i]++;
//     array[j - 1][i + 1]++;
//     array[j][i + 1]++;
//     array[j + 1][i + 1]++;
//     array[j + 1][i]++;
//   } else if ((x == 1 && y == 3) || (x == 2 && y == 3)) {
//     // console.log("right center");
//     array[j][i - 1]++;
//     array[j - 1][i - 1]++;
//     array[j - 1][i]++;
//     array[j + 1][i]++;
//     array[j + 1][i - 1]++;
//   } else if (x == 3 && y == 0) {
//     // console.log("bottom left");
//     array[j - 1][i]++;
//     array[j - 1][i + 1]++;
//     array[j][i + 1]++;
//   } else if (x == 3 && y == 3) {
//     // console.log("bottom right");
//     array[j][i - 1]++;
//     array[j - 1][i - 1]++;
//     array[j - 1][i]++;
//   } else if ((x == 3 && y == 1) || (x == 3 && y == 2)) {
//     // console.log("bottom center");
//     array[j][i - 1]++;
//     array[j - 1][i - 1]++;
//     array[j - 1][i]++;
//     array[j - 1][i + 1]++;
//     array[j][i + 1]++;
//   }
//   return array;
// }

function minesweeper(input) {
  // convert to x's
  array = [...input];
  // console.log(array);

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
      if (array[j][i] === 1) {
        array[j][i] = 10;
      }
    }
  }
  console.log(array);
  // iterate over each element looking for x's
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
      if (array[j][i] >= 10) {
        if (j == 0 && i == 0) {
          // console.log("top left corner");
          array[j][i + 1]++;
          array[j + 1][i + 1]++;
          array[j + 1][i]++;
        } else if (j == 0 && i == 3) {
          // console.log("top right");
          array[j][i - 1]++;
          array[j + 1][i]++;
          array[j + 1][i - 1]++;
        } else if ((j == 0 && i == 1) || (j == 0 && i == 2)) {
          // console.log("top center");
          array[j][i - 1]++;
          array[j][i + 1]++;
          array[j + 1][i + 1]++;
          array[j + 1][i]++;
          array[j + 1][i - 1]++;
        } else if ((j == 1 && i == 0) || (j == 2 && i == 0)) {
          // console.log("left center");
          array[j - 1][i]++;
          array[j - 1][i + 1]++;
          array[j][i + 1]++;
          array[j + 1][i + 1]++;
          array[j + 1][i]++;
        } else if ((j == 1 && i == 3) || (j == 2 && i == 3)) {
          // console.log("right center");
          array[j][i - 1]++;
          array[j - 1][i - 1]++;
          array[j - 1][i]++;
          array[j + 1][i]++;
          array[j + 1][i - 1]++;
        } else if (j == 3 && i == 0) {
          // console.log("bottom left");
          array[j - 1][i]++;
          array[j - 1][i + 1]++;
          array[j][i + 1]++;
        } else if (j == 3 && i == 3) {
          // console.log("bottom right");
          array[j][i - 1]++;
          array[j - 1][i - 1]++;
          array[j - 1][i]++;
        } else if ((j == 3 && i == 1) || (j == 3 && i == 2)) {
          // console.log("bottom center");
          array[j][i - 1]++;
          array[j - 1][i - 1]++;
          array[j - 1][i]++;
          array[j - 1][i + 1]++;
          array[j][i + 1]++;
        } else {
          array[j][i - 1]++;
          array[j][i + 1]++;
          array[j + 1][i + 1]++;
          array[j + 1][i]++;
          array[j + 1][i - 1]++;
          array[j - 1][i - 1]++;
          array[j - 1][i]++;
          array[j - 1][i + 1]++;
        }
      }
    }
  }

  console.log(array);

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
      if (array[j][i] >= 10) {
        array[j][i] = "x";
      }
    }
  }

  console.log(array);
}

minesweeper([
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]);
