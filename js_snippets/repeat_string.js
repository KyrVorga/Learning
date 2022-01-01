function repeatStringNumTimes(str, num) {
    
    let newString = '';
    for (let i =0; i < num; i++) {
        newString += str;
    }
    return newString;
  }

  repeatStringNumTimes("abc", 3);