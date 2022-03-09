function diffArray(arr1, arr2) {
    const newArr = [];
  
    arr1.forEach(elem => {
      if (arr2.includes(elem) == false) {
        newArr.push(elem);
      }
    })
      arr2.forEach(elem => {
      if (arr1.includes(elem) == false) {
        newArr.push(elem);
      }
    })
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
  diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);