function truncateString(str, num) {
    let newString = str.slice(0,num);
    if (str.length <= num) {
      return newString;
    } else {
      return newString  += '...';
    }
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);