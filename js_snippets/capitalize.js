function titleCase(str) {
    let arr = (str.toLowerCase()).split(' ');
    for (let elem of arr) {
        elem.slice(0).toUpperCase().concat(elem)
    }
  }
  
  titleCase("I'm a little tea pot");