function titleCaseWrong(str) {
    let arr = (str.toLowerCase()).split(' ');
    for (let elem of arr) {
        elem.slice(0).toUpperCase().concat(elem)
        elem = elem.replace(/./, elem.charAt(0).toUpperCase());
    }
    return arr.join(' ');
  }
  
  titleCaseWrong("I'm a little tea pot");

// Above code doesnt work because of trying to use for...of

function titleCase(str) {
    let arr = (str.toLowerCase()).split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/./, arr[i].charAt(0).toUpperCase());
    }
    return arr.join(' ');
}

titleCase("I'm a little tea pot");