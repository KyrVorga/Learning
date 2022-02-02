function destroyer(arr) {
  
    for (let i = 1; i < arr.length +1; i++) {
      let find = arguments[0].indexOf(arguments[i]);
      arguments[0].splice(find,1)
      console.log(arguments[0] )
    }
    // console.log(arguments[0].indexOf(3))
    // arguments[0].splice(2)
    // console.log(arguments[0], arguments[0].indexOf(3))
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);