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

function operate(array, coords, operators) {
  for (i = 0; i < operators.length; i++) {
    let a, b;
    [a, b] = coords;
    if (operators[i][0] == 1) {
      a++;
    } else if (operators[i][0] == -1) {
      a--;
    }

    if (operators[i][1] == 1) {
      b++;
    } else if (operators[i][1] == -1) {
      b--;
    }
    array[a][b]++;
  }
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
