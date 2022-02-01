function sumAll(arr) {
    let sorted = arr.sort(function(a, b){return a-b});
    let sum =0;
    for(let i = sorted[0]; i < sorted[1]+1; i++) {
      sum += i;
    }
    return sum;
  }
  
  sumAll([2, 8]);