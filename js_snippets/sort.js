// array of numbers or strings
function sorter(arr) {
  const copyArr = [...arr];
  for (let elem of copyArr) {
    elem.sort(function (a, b) {
      return b - a;
    });
  }
  return copyArr;
}

// sort array of arrays by [nth] element
function sorter(arr) {
  const copyArr = [...arr];
  return copyArr.sort((a, b) => b[1] - a[1]);
}

const sorter = (arr) => {
  return arr.sort((a, b) => b - a);
};

numbers.sort(function (a, b) {
  return a - b;
});
const sorter = (a, b) => a - b;
