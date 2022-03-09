// function findElement(arr, func) {
//     for (let num of arr) {
//         func(num) ? elem : undefined;
//     }
//   }
  
//   findElement([1, 2, 3, 4], num => num % 2 === 0);

function findElement(arr, func) {
    return arr.find(func);
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);