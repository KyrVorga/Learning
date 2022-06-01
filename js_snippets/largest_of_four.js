function largestOfFour(arr) {
    const copyArr = [...arr];
    let largest = [];
    for (let elem of copyArr) {
      elem.sort(function(a, b){return b-a});
      largest.push(elem[0])
    }
    return largest;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);