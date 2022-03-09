// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    
    let a = 0;
    let b = size;
    let multi = [];

    for (let i = 0; i < arr.length/size; i++) {
        multi[i] = arr.slice(a, b);
        a += size;
        b += size;
    }
    
    console.log(multi);
    return multi;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)