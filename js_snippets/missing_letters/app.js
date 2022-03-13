// ANCHOR Missing letters
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

// NOTE planning area
/* 
get character str.at(0) 
then .search() for that char in a string of the whole alphabet save to const index
loop through the whole alphabet starting at saved index ^ 
compare str[i] to alph[i]
if they are not the same return alph[i]
otherwise return undefined
*/

// NOTE realizations
/* 
in the for loop i tried to iterate through both strings using string[i]
i realized that for the strings that dont start at 'a' it would go out of bounds very quickly
so i had to make another counter so that str[j] would count from the begining of str

free code camp doesnt like iterating over strings, probably a bad habit, converted them to arrays using split()

i wasnt declaring my variables properly :(
*/

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.search(str.at(0));
  alphabet = alphabet.split("");
  let newStr = str.split("");
  for (let i = index, j = 0; i < alphabet.length; i++, j++) {
    if (alphabet[i] != newStr[j]) {
      return alphabet[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce")); //should return the string d.

console.log(fearNotLetter("abcdefghjklmno")); // should return the string i.

console.log(fearNotLetter("stvwx")); //should return the string u.

console.log(fearNotLetter("bcdf")); // should return the string e.

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.
