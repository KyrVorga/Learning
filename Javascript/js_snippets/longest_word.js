function longestWord(str) {

    let longest = 0;
    for (let word of str.split(' ')){
      if (word.length > longest) {
        longest = word.length;
      }
    }
    return longest;
  }
  
  longestWord("The quick brown fox jumped over the lazy dog");