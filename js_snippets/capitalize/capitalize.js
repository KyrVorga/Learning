/* ANCHOR Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

/* NOTE planning area

Psuedo-code / Description / Explanation

*/

/* NOTE Realizations

Mistakes / Corrections / Concepts Learnt
*/

function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  return words
    .map((element) => element.replace(/./, element.at(0).toUpperCase()))
    .join(" ");
}

console.log(titleCase("I'm a little tea pot")); // should return a string.

console.log(titleCase("I'm a little tea pot")); // should return the string I'm A Little Tea Pot.

console.log(titleCase("sHoRt AnD sToUt")); // should return the string Short And Stout.

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // should return the string Here Is My Handle Here Is My Spout.
