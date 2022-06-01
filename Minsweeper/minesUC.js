function operate(array, coords, operators) {
  for (i = 0; i < operators.length; i++) {
    let a, b;
    [a, b] = coords;
    if (operators[i][0] == 1) {a++;} 
    else if (operators[i][0] == -1) {a--;}
    if (operators[i][1] == 1) {b++;} 
    else if (operators[i][1] == -1) {b--;}
    array[a][b]++;
  }
}
function minesweeper(input) {
  array = [...input];
  const center = [[1, 0], [0, 1], [1, -1], [1, 1], [-1, 0], [0, -1], [-1, -1], [-1, 1]];
  const left = [[1, 0], [0, 1], [1, 1], [-1, 0], [-1, 1]];
  const right = [[1, 0], [1, -1], [-1, 0], [0, -1], [-1, -1]];
  const bottom = [[0, 1], [-1, 0], [0, -1], [-1, -1], [-1, 1]];
  const bottomleft = [[0, 1], [-1, 0], [-1, 1]];
  const bottomright = [[-1, 0], [0, -1], [-1, -1]];
  const top = [[1, 0],  [0, 1], [1, -1], [1, 1], [0, -1]];
  const topleft = [[1, 0], [0, 1], [1, 1]];
  const topright = [[1, 0], [1, -1], [0, -1]];
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
      if (array[j][i] === 1) {
        array[j][i] = 10;
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] >= 10) {
        if (i == 0 && j == 0) {
          operate(array, [i, j], topleft);
        } else if (i == 0 && j == 3) {
          operate(array, [i, j], topright);
        } else if ((i == 0 && j == 1) || (i == 0 && j == 2)) {
          operate(array, [i, j], top);
        } else if ((i == 1 && j == 0) || (i == 2 && j == 0)) {
          operate(array, [i, j], left);
        } else if ((i == 1 && j == 3) || (i == 2 && j == 3)) {
          operate(array, [i, j], right);
        } else if (i == 3 && j == 0) {
          operate(array, [i, j], bottomleft);
        } else if (i == 3 && j == 3) {
          operate(array, [i, j], bottomright);
        } else if ((i == 3 && j == 1) || (i == 3 && j == 2)) {
          operate(array, [i, j], bottom);
        } else {
          operate(array, [i, j], center);
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
console.log(minesweeper([[0, 1, 0, 0],[0, 0, 1, 0],[0, 1, 0, 1], [1, 1, 0, 0],]));