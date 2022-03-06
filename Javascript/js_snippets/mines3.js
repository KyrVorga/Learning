function toTen(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 1) {
        array[i][j] = 10;
      }
    }
  }
}

function mines(array) {
  let mines = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] >= 10) {
        mines.push([i, j]);
      }
    }
  }
  return mines;
}

function operate(value) {
  const plus = (num) => (num += 1);
  const minus = (num) => (num -= 1);
  const operators = [
    [1, 0],
    [0, 1],
    [1, -1],
    [1, 1],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [-1, 1],
  ];

  for (i = 0; i < operators.length; i++) {
    for (j = 0; j < operators[i].length; j++) {
      if (operators[i][j] == 1) {
        return plus(value);
      } else if (operators[i][j] == -1) {
        return minus(value);
      } else {
        return value;
      }
    }
  }
}

function minesweeper(input) {
  array = [...input];
  toTen(array);
  // console.log(array);

  mines = mines(array);
  // console.log(mines);
}

minesweeper([
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]);
