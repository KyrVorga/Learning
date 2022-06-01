// // // create a function that takes an array and return both the min and max numbers in order.
// // // declare variable and assign a function to it.
// // const minMax = (array) => {
// //   // create placeholder variables
// //   let max = array[0]
// //   let min = array[0]
// //   // iterate over array, check if element is greater than max, then overwrite max
// //   // and if element is less than min, overwrite min.
// //   array.forEach(element => {
// //     if(element > max) {max = element};
// //     if(element < min) {min = element};
// //   });
// //   // return an array containing min and max
// //   return [min,max]
// // }

// // console.log(minMax([1,2,3,4,5,6,5,4,3,2,0]));

// // // create function that concats n strings
// // function concat() {
// //   let args = Array.from(arguments);
// //   return args.join(',').split(',')
// // }

// // console.log(concat([1,2,3],[4,5,6],[7,8,9]));

// // const concatArray = (...args) => args.flat(Infinity);

// // console.log(concatArray([1,2,3],[4,5,6],[7,8,9]));

// // function placeholder(array, string) {
// //   if (string == 'Asc') {
// //     return array.sort((a, b) => a - b);
// //   } else if (string == 'Des') {
// //     return array.sort((a, b) => b - a);
// //   } else if (string == 'None') {
// //     return array
// //   }
// // }

// // console.log(placeholder([1,4,3,6,5,2], 'Asc'));
// // console.log(placeholder([1,4,3,6,5,2], 'Des'));
// // console.log(placeholder([1,4,3,6,5,2], 'None'));

// // const nested = (arr) => arr.flat(Infinity).length

// // // console.log(nested([1,[2,[3,4]]]))

// // let array = [
// //   [1, 2, 3, 4],
// //   [5, 6, 7, 8],
// //   [9, 10, 11, 12],
// //   [13, 14, 15, 16],
// // ];
// // let array2 = [5, 4, 3, 2, 1];

// // // Array2
// // // for (let i=0; i < array.length; i++) {
// // //   console.log(array[1][1])
// // // }

// // for (elem of array) {
// //   console.log(elem);
// // }

// // // array2.forEach(elem => {
// // //   console.log(elem);
// // // })

// // // console.log(array.flat(Infinity));
// // // let flatten = array.flat(Infinity)

// // // flatten.forEach(elem => {
// // //   console.log(elem)
// // // })
// // // Array

// // // for (let i=0; i < array.length; i++) {
// // //   for (let j=0; j < array[i].length; j++) {
// // //     console.log(array[i][j]);
// // //   }
// // // }

// // for (subArr of array) {
// //   for (elem of subArr) {
// //     console.log(subArr[1]);
// //   }
// // }

// // array.forEach((subArr, i) => {
// //   subArr.forEach((elem, j) => {
// //     array[i][j] += 1;
// //   });
// // });

// // console.log(array);

// // // array.forEach((subArr, i) => {
// // //   subArr.forEach((elem, j) => {
// // //     if (elem >= 10) {
// // //       array[i][j] = 'x';
// // //     }
// // //   });
// // // });

// // for (let i = 0; i < array.length; i++) {
// //   for (let j = 0; j < array[i].length; j++) {
// //     if (array[i][j] >= 10) {
// //       array[i][j] = "x";
// //     }
// //   }
// // }

// // console.log(array);



// let arr1 =  [9, 9, 0, 9, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 9];
//          let arr2 = [...arr1]; // create a copy or a clone or array one
//          if(arr1[0] == 9){
//             arr2[1] += 1;
//             arr2[4] += 1;
//             arr2[5] += 1;            
//          }
//          if(arr1[1] == 9){          
//             arr2[0] += 1;
//             arr2[2] += 1;
//             arr2[4] += 1;
//             arr2[5] += 1;
//             arr2[6] += 1;                 
//          }
//          if(arr1[2] == 9){
//             arr2[1] += 1;
//             arr2[3] += 1;
//             arr2[5] += 1;
//             arr2[6] += 1;
//             arr2[7] += 1;                     
//          }
//          if(arr1[3] == 9){
//             arr2[2] += 1;
//             arr2[6] += 1;
//             arr2[7] += 1;            
//          }
//          if(arr1[4] == 9){          
//             arr2[0] += 1;
//             arr2[1] += 1;
//             arr2[5] += 1;
//             arr2[8] += 1;
//             arr2[9] += 1;                 
//          }
//          if(arr1[5] == 9){
//             arr2[0] += 1;
//             arr2[1] += 1;
//             arr2[2] += 1;
//             arr2[4] += 1;
//             arr2[6] += 1;
//             arr2[8] += 1;
//             arr2[9] += 1;
//             arr2[10] += 1;                           
//          }
//          if(arr1[6] == 9){          
//             arr2[1] += 1;
//             arr2[2] += 1;
//             arr2[3] += 1;
//             arr2[5] += 1;
//             arr2[7] += 1;
//             arr2[9] += 1;
//             arr2[10] += 1;
//             arr2[11] += 1;                
//          }
//          if(arr1[7] == 9){
//             arr2[2] += 1;
//             arr2[3] += 1;
//             arr2[6] += 1;
//             arr2[10] += 1;
//             arr2[11] += 1;                     
//          }
//          if(arr1[8] == 9){
//             arr2[4] += 1;
//             arr2[5] += 1;
//             arr2[9] += 1;  
//             arr2[12] += 1;
//             arr2[13] += 1;             
//          }
//          if(arr1[10] == 9){          
//             arr2[5] += 1;
//             arr2[6] += 1;
//             arr2[7] += 1;
//             arr2[9] += 1;
//             arr2[11] += 1;
//             arr2[13] += 1;
//             arr2[14] += 1;
//             arr2[15] += 1;                   
//          }
//          if(arr1[11] == 9){
//             arr2[6] += 1;
//             arr2[7] += 1;
//             arr2[10] += 1;
//             arr2[14] += 1;
//             arr2[15] += 1;                  
//          }
//          if(arr1[12] == 9){
//             arr2[8] += 1;
//             arr2[9] += 1;
//             arr2[3] += 1;            
//          }
//          if(arr1[13] == 9){          
//             arr2[8] += 1;
//             arr2[9] += 1;
//             arr2[10] += 1;
//             arr2[12] += 1;
//             arr2[14] += 1;                 
//          }
//          if(arr1[14] == 9){
//             arr2[9] += 1;
//             arr2[10] += 1;
//             arr2[11] += 1;
//             arr2[13] += 1;
//             arr2[15] += 1;                     
//          }
//          if(arr1[15] == 9){          
//             arr2[10] += 1;
//             arr2[11] += 1;
//             arr2[14] += 1;                
//          }
//          console.log(arr2)
//          for (let i = 0; i < arr2.length; i++){ //a simple for loop
//           if (arr2[i] > 8){ //checks the index to see if is greater than eight (8) and returns
//               arr2.splice([i], 1, 'x'); //replaces [i]th index, first element with the letter 'x'.
//           }
//         }
//         console.log(arr2);







let grid = [
   [0, 1, 0, 0],
   [0, 0, 1, 0],
   [0, 1, 0, 1],
   [1, 1, 0, 0]] 
 
// function minesweeper(arr) {
const options = [
   [1, 0], //bottom
   [0, 1], //right
   [1, -1], //bottom left
   [1, 1], //bottom right
   [-1, 0], //top
   [0, -1], //left
   [-1, -1], //top left
   [-1, 1], //top right
];


let newArr = [];
grid.forEach((row, i) => {
   newArr.push([])
   row.forEach((col,j) => {
     if (col === 1) {
        options.forEach(elem => {
         if (i+elem[0] < grid.length && i+elem[0] >= 0 && j+elem[1] < row.length && j+elem[1] >= 0) {
            grid[i+elem[0]][j+elem[1]]++
         }
        })
     } 
   })
})

console.log(grid);


const getCount = (array, x, y) => offsets.reduce((c, [i, j]) => c + (array[x + i]?.[y + j] === '*'), 0),
    offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]],
    input = [[0, 0, '*'], ['*', 0, 0], [0, '*', 0]],
    result = input.map((row, i, a) => row.map((v, j) => v || getCount(a, i, j)));

result.forEach(a => console.log(a.join(' ')));

   // let newArr = []; 
   // for(let i=0; i < arr.length; i++){
   //    newArr.push([]);
   //    for(let j=0; j < arr[i].length; j++){
   //       if(arr[i][j] == 1) {
   //          newArr[i].push(9)            
   //       } 
   //       else {
   //          let empty = 0;
   //          for (let k = 0; k < options.length; k++) {
   //             let [row, col] = options[k];
   //             if(arr[i+row][j+col]){
   //                empty+=1;
   //             }
   //          }
            // if(i>0){
            //    if(arr[i-1][j]){
            //    empty+= 1;
            //    }
            //    if(arr[i-1][j+1]){
            //    empty+= 1;
            //    }
            //    if(arr[i-1][j-1]){
            //    empty+= 1;
            //    }
            // }
            // if(i < arr.length - 1){
            //    if(arr[i+1][j]){
            //    empty+=1;
            //    }
            //    if(arr[i+1][j+1]){
            //    empty+= 1;
            //    }
            //    if(arr[i+1][j-1]){
            //    empty+=1;
            //    }
            // }

            // if(arr[i][j+1]){
            //    empty+=1;
            // }
            // if(arr[i][j-1]){
            //    empty+=1;
            // }
//             newArr[i].push(empty)
//          }
//       }
//    }
//    return newArr
//  }
   
//  console.log(minesweeper(grid))
 
 