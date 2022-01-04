function bouncer(arr) {
    for (let i = arr.length; i >= 0; i--) {
        if (Boolean(arr[i]) === false) {
            arr.splice(i,1);
        }
    }
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);