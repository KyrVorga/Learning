function mutation(arr) {
    
    let base = arr[0].toLowerCase().split('');
    let check = arr[1].toLowerCase().split('');
    let total = 0;

    for (let i =0; i < base.length; i++) {
        for (let j =0; j < check.length; j++) {
            if (base[i] === check[j]) {
                total++
            }
        }
    }
    
    if (total >= check.length) {
        return true;
    } else {
        return false;
    }
}




mutation(["hello", "hey"]);
mutation(["Mary", "Army"]);



//better method after realizing there were arr methods to check for an element.. above method didnt work either..

function mutation(arr) {
    
    let base = arr[0].toLowerCase().split('');
    let check = arr[1].toLowerCase().split('');

    for (let i =0; i < check.length; i++) {
        if (base.includes(check[i]) != true) {
            return false;
        }
    }
    return true;

}
