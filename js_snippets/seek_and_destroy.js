function destroyer(arr) {
  
    for (let i = 1; i < arr.length + 2; i++) {
      for (let j = 0; j < arguments[0].length; i++)
    }
    // console.log(arguments[0].indexOf(3))
    // arguments[0].splice(2)
    // console.log(arguments[0], arguments[0].indexOf(3))
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);


  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < arguments[0].length; j++){
      if (arguments[0][j] === arguments[i])
        arguments[0].splice(arguments[0][j],1)
        console.log(arguments[0])
