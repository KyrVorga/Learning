/* ANCHOR Smallest Common Multiple
Description:
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/

/* NOTE Planning Area / Psuedo-code / Description / Explanation
sort arr
recursivley times 
loop until
  times largets num by i
    if num * i is not divisible by other numbers in the array move on
      else return num

*/

/* NOTE Realizations / Mistakes / Corrections / Concepts Learnt



*/
function smallestCommons(arr) {
  const sorter = (a, b) => a - b;
  let copy = arr.sort(sorter);
  let newArr = [];
  for (let i = copy[1]; i > copy[0] - 1; i--) {
    newArr.push(i);
  }
  let flag = true;
  let i = 0;
  let num = 0;
  while (flag == true) {
    i++;
    num = newArr[0] * i;
    if (newArr.every((item) => num % item === 0)) {
      flag = false;
    }
  }
  return num;
}
// console.log(smallestCommons([1, 5])); // should return a number.

// console.log(smallestCommons([1, 5])); // should return 60.

// console.log(smallestCommons([5, 1])); // should return 60.

// console.log(smallestCommons([2, 10])); // should return 2520.

// console.log(smallestCommons([1, 13])); // should return 360360.

console.log(smallestCommons([23, 18])); // should return 6056820.
