const array = [
  [0, 10, 0, 0],
  [0, 0, 10, 0],
  [0, 10, 0, 10],
  [10, 10, 0, 0],
];

function calulateMines(array) {
  // copy = [...array];
  // console.log(copy);

  // let mines = [];

  // for (let j = 0; j < copy.length; j++) {
  //   for (let i = 0; i < copy[j].length; i++) {
  //     if (copy[j][i] >= 10) {
  //       mines.push([j, i]);
  //     }
  //   }
  // }
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
      if (array[j][i] >= 10) {
        if (array[j] == 0) {
          // check if in left column
          if (array[i] == 0) {
            array[j][i + 1]++;
            array[j + 1][i + 1]++;
            array[j + 1][i]++;
          }
          // check if in right column
          else if (array[i] == 3) {
            array[j][i - 1]++;
            array[j + 1][i]++;
            array[j + 1][i - 1]++;
          } else {
            array[j][i - 1]++;
            array[j][i + 1]++;
            array[j + 1][i + 1]++;
            array[j + 1][i]++;
            array[j + 1][i - 1]++;
          }

          // check if in bottom row
        } else if (array[j] == 3) {
          // check if in left column
          if (array[i] == 0) {
            array[j - 1][i]++;
            array[j - 1][i + 1]++;
            array[j][i + 1]++;
          }
          // check if in right column
          else if (array[i] == 3) {
            array[j][i - 1]++;
            array[j - 1][i - 1]++;
            array[j - 1][i]++;
          } else {
            array[j][i - 1]++;
            array[j - 1][i - 1]++;
            array[j - 1][i]++;
            array[j - 1][i + 1]++;
            array[j][i + 1]++;
          }

          // check if in left column
        } else if (array[i] == 0) {
          array[j - 1][i]++;
          array[j - 1][i + 1]++;
          array[j][i + 1]++;
          array[j + 1][i + 1]++;
          array[j + 1][i]++;
          // check if in right column
        } else if (array[i] == 3) {
          array[j][i - 1]++;
          array[j - 1][i - 1]++;
          array[j - 1][i]++;
          array[j + 1][i]++;
          array[j + 1][i - 1]++;
          // otherwise its in the center
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
  // console.log(mines);
  // for (let elem of mines) {
  //   // check if in top row
  //   if (array[j] == 0) {
  //     // check if in left column
  //     if (array[i] == 0) {
  //       array[j][i + 1]++;
  //       array[j + 1][i + 1]++;
  //       array[j + 1][i]++;
  //     }
  //     // check if in right column
  //     else if (array[i] == 3) {
  //       array[j][i - 1]++;
  //       array[j + 1][i]++;
  //       array[j + 1][i - 1]++;
  //     } else {
  //       array[j][i - 1]++;
  //       array[j][i + 1]++;
  //       array[j + 1][i + 1]++;
  //       array[j + 1][i]++;
  //       array[j + 1][i - 1]++;
  //     }

  //     // check if in bottom row
  //   } else if (elem[0] == 3) {
  //     // check if in left column
  //     if (elem[1] == 0) {
  //       array[j - 1][i]++;
  //       array[j - 1][i + 1]++;
  //       array[j][i + 1]++;
  //     }
  //     // check if in right column
  //     else if (elem[1] == 3) {
  //       array[j][i - 1]++;
  //       array[j - 1][i - 1]++;
  //       array[j - 1][i]++;
  //     } else {
  //       array[j][i - 1]++;
  //       array[j - 1][i - 1]++;
  //       array[j - 1][i]++;
  //       array[j - 1][i + 1]++;
  //       array[j][i + 1]++;
  //     }

  //     // check if in left column
  //   } else if (elem[1] == 0) {
  //     array[j - 1][i]++;
  //     array[j - 1][i + 1]++;
  //     array[j][i + 1]++;
  //     array[j + 1][i + 1]++;
  //     array[j + 1][i]++;
  //     // check if in right column
  //   } else if (elem[1] == 3) {
  //     array[j][i - 1]++;
  //     array[j - 1][i - 1]++;
  //     array[j - 1][i]++;
  //     array[j + 1][i]++;
  //     array[j + 1][i - 1]++;
  //     // otherwise its in the center
  //   } else {
  //     array[j][i - 1]++;
  //     array[j][i + 1]++;
  //     array[j + 1][i + 1]++;
  //     array[j + 1][i]++;
  //     array[j + 1][i - 1]++;
  //     array[j - 1][i - 1]++;
  //     array[j - 1][i]++;
  //     array[j - 1][i + 1]++;
  //   }
  // }

  // return copy;
}

calulateMines(array);

// for (let elem of copy) {
//   if (elem[0] == 0) {
//     if (elem[1] == 0) {
//       console.log("top left corner");
//     } else if (elem[1] == 3) {
//       console.log("top right");
//     } else {
//       console.log("top center");
//     }
//   } else if (elem[0] == 3) {
//     if (elem[1] == 0) {
//       console.log("bottom left");
//     } else if (elem[1] == 3) {
//       console.log("bottom right");
//     } else {
//       console.log("bottom center");
//     }
//   } else if (elem[1] == 0) {
//     console.log("left center");
//   } else if (elem[1] == 3) {
//     console.log("right center");
//   }
// }
