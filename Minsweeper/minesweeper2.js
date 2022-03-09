const options = [
  [1, 0], //bottom 0
  [0, 1], //right 1
  [1, -1], //bottom left 2
  [1, 1], //bottom right 3
  [-1, 0], //top 4
  [0, -1], //left 5
  [-1, -1], //top left 6
  [-1, 1], //top right 7
];

// convert to filter or map or something
function chooseOps(choices, indexes) {
  let operators = [];
  for (let i = 0; i < choices.length; i++) {
    for (let j = 0; j < indexes.length; j++) {
      if (i == indexes[j]) {
        operators.push(choices[i]);
      }
    }
  }
  return operators;
}

function operate(array, coords, operators) {
  for (i = 0; i < operators.length; i++) {
    let a, b;
    [a, b] = coords;
    a += operators[i][0];
    b += operators[i][1];
    array[a][b]++;
  }
}

function minesweeper(input) {
  array = [...input];
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
      if (array[j][i] === 1) {
        array[j][i] = 10;
      }
    }
  }
  // iterate over each element looking for 10's
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] >= 10) {
        if (i == 0 && j == 0) {
          operate(array, [i, j], chooseOps(options, [0, 1, 3])); // top left
        } else if (i == 0 && j == array[j].length - 1) {
          operate(array, [i, j], chooseOps(options, [0, 2, 5])); //top right
        } else if ((i == 0 && j == 1) || (i == 0 && j == 2)) {
          operate(array, [i, j], chooseOps(options, [0, 1, 2, 3, 5])); // top
        } else if ((i == 1 && j == 0) || (i == 2 && j == 0)) {
          operate(array, [i, j], chooseOps(options, [0, 1, 3, 4, 6])); // left
        } else if (
          (i == 1 && j == array[j].length - 1) ||
          (i == 2 && j == array[j].length - 1)
        ) {
          operate(array, [i, j], chooseOps(options, [0, 2, 4, 5, 6])); // right
        } else if (i == array.length - 1 && j == 0) {
          operate(array, [i, j], chooseOps(options, [1, 4, 7])); // bottom left
        } else if (i == array.length - 1 && j == array[j].length - 1) {
          operate(array, [i, j], chooseOps(options, [4, 5, 6])); // bottom right
        } else if (
          (i == array.length - 1 && j == 1) ||
          (i == array.length - 1 && j == 2)
        ) {
          operate(array, [i, j], chooseOps(options, [1, 4, 5, 6, 7])); // bottom
        } else {
          operate(array, [i, j], chooseOps(options, [0, 1, 2, 3, 4, 5, 6, 7])); // center
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
  return array;
}

console.log(
  minesweeper([
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ])
);
console.log(
  minesweeper([
    [0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
  ])
);
