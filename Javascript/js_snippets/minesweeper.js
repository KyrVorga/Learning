function minesweeper(input) {
  array = [...input];

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
      if (array[j][i] === 1) {
        array[j][i] = 10;
      }
    }
  }

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
      if (array[j][i] >= 10) {
        if (j == 0 && i == 0) {
          // console.log("top left");
          array[j][i + 1]++;
          array[j + 1][i + 1]++;
          array[j + 1][i]++;
        } else if (j == 0 && i == 3) {
          // console.log("top right");
          array[j][i - 1]++;
          array[j + 1][i]++;
          array[j + 1][i - 1]++;
        } else if ((j == 0 && i == 1) || (j == 0 && i == 2)) {
          // console.log("top");
          array[j][i - 1]++;
          array[j][i + 1]++;
          array[j + 1][i + 1]++;
          array[j + 1][i]++;
          array[j + 1][i - 1]++;
        } else if ((j == 1 && i == 0) || (j == 2 && i == 0)) {
          // console.log("left");
          array[j - 1][i]++;
          array[j - 1][i + 1]++;
          array[j][i + 1]++;
          array[j + 1][i + 1]++;
          array[j + 1][i]++;
        } else if ((j == 1 && i == 3) || (j == 2 && i == 3)) {
          // console.log("right");
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
          // console.log("bottom");
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
