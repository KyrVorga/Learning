function getIndexToIns(arr, num) {
    let copyArr = [...arr];
    const len = copyArr.length
    copyArr.sort(function(a, b){return a-b});

    if (len === 0) {
        return 0;
    }
    else if (num > copyArr[len-1]) {
        console.log(len);
        return len
    }    
    else {
        for (let i = 0; i < len; i++) {
            if (num <= copyArr[i]) {
                return i;
            }
        }
    }
}

getIndexToIns([2, 5, 10], 15)


// Simplified version, didnt realize return len would suffice

function getIndexToIns(arr, num) {
    let copyArr = [...arr];
    const len = copyArr.length
    copyArr.sort(function(a, b){return a-b});


    for (let i = 0; i < len; i++) {
        if (num <= copyArr[i]) {
            return i;
        }
    }
    return len;
}
getIndexToIns([2, 5, 10], 15);