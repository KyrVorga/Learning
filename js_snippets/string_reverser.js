function reverseString(str) {

    let reversed = []; // declare 
  
    for (let elem of str) {
      reversed.unshift(elem); // add elements to arr backwards
    }
    
    return reversed.join(''); // join elements without commas or spaces
  }
  
  reverseString("hello");