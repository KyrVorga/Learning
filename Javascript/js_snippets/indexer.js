function getIndexToIns(arr, num) {
    let copyArr = [...arr];
    copyArr.sort(function(a, b){return a-b});
    console.log(copyArr);
    for (let i = 0; i < copyArr.length; i++) {
        if (num > copyArr[i]) {
            return i;
        }
    }
}

getIndexToIns([40, 60], 50);


function getIndexToIns(arr, num) {
    let copyArr = [...arr];
    copyArr.sort(function(a, b){return a-b});
    console.log(copyArr);

    for (let elem of copyArr) {
        if (num > elem) {
            console.log(copyArr.indexOf(elem));
            return copyArr.indexOf(elem);
        }
    }
}

getIndexToIns([40, 60], 50);