// takes two arrays of numberws and returns the common numbers
// const common = (array1, array2) => {
//   return array1.filter(elem => array2.includes(elem))
// }
// common([1,2,3,4,5],[1,2,6,7,4,8,9,3]);

// function reorder (arr, type) {
// return arr.map(elem => {
//   if(type === 'asc') {
//     return elem.toString().split('').sort((a, b) => a - b).join('')
//   }
//   return elem.toString().split('').sort((a, b) => b - a).join('')
// })
// }

// console.log(reorder([515, 4332, 312, 215, 591], 'asc'));

// console.log(reorder([515, 4332, 312, 215, 591], 'des'));

/* given an object with students and the grades that they made on the tests that they took,
  determine which student has the best test average

  the key will be the student's name and value will be an array of their grade.
  you will only have to return the students name. you do not need to return their test average.

	  Example:
  getBestStudent({
      Ali: [67, 84, 75, 63],
      James: [87, 98, 64, 71],
      Matt: [90, 58, 73, 86],
  })
*/

// ANCHOR Commented code

// declare arrow function called getHighestAv
const getHighestAv = (obj) => {
  // this iterates over all of the values for each person,
  // it will then average out the value and assign them as an array to averages.
  let averages = Object.keys(obj).map((person) => {
    return obj[person].reduce((previous, current) => previous + current);
  });
  // key is equal to the index of the largest number in the array.
  const key = averages.indexOf(Math.max(...averages));

  // return the name of the nth person where n = key
  return Object.keys(obj)[key];
};


// ANCHOR Code without comments
const getHighestAv2 = (obj) => {
  let averages = Object.keys(obj).map((person) => {
    return obj[person].reduce((previous, current) => previous + current);
  });
  const key = averages.indexOf(Math.max(...averages));
  return Object.keys(obj)[key];
};



console.log(
  getHighestAv2({
    Ali: [67, 84, 75, 63],
    James: [87, 98, 64, 71],
    Matt: [90, 58, 73, 86],
  })
);

// console.log(getBestStudent({
//   Ali: [67, 84, 75, 63],
//   James: [87, 98, 64, 71],
//   Matt: [90, 58, 73, 86],
// })
// );

let product = new Object();

product.name = "Laptop";
product.price = 1200;
product.price = 1000;
console.log(`${product.name}: ${product.price}`);

delete product.name;
console.log(product);

let salaries = {
  john: 100,
  ann: 160,
  peter: 130
}


console.log(Object.values(salaries).reduce((previous, current) => previous + current,0));

salaries = {}
console.log(Object.values(salaries).reduce((previous, current) => previous + current,0));

// test scores
scores = [93,92,78,80,86]
console.log(scores.reduce((previous, current) => previous + current,0) / scores.length);