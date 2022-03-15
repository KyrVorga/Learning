/* ANCHOR Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

/* NOTE planning area

split str by each letter split('')
use .reverse
then join
chain all methods together

*/

/* NOTE Realizations

Mistakes / Corrections / Concepts Learnt

*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); //should return a string.

console.log(reverseString("hello")); //should return the string olleh.

console.log(reverseString("Howdy")); //should return the string ydwoH.

console.log(reverseString("Greetings from Earth")); //should return the string htraE morf sgniteerG.
