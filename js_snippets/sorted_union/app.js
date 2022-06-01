/* ANCHOR Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

/* NOTE planning area
declare unique array
loop through each array
  loop through each value
    if value is not in unique array, then push it


join all arrays together
loop through array 
check if elem is in unique array
if not push to array
*/

/* NOTE Realizations

Mistakes / Corrections / Concepts Learnt

*/

function uniteUnique(...arr) {
  let unique = [];
  let joined = [];
  arr.forEach((element) => {
    element.forEach((item) => joined.push(item));
  });

  joined.forEach((item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].

// console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].

// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].

// console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // should return [1, 3, 2, 5, 4, 6].

// console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
