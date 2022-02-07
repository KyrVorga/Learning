const db = [['option a',0.3],['option b', 0.15],['option c',0.2],['option d',0.17]]


function sorter(arr) {
    const copyArr = [...arr];
    return copyArr.sort((a, b) => b[1] - a[1]);
}
function pick(options) {
    
    random = Math.random();
    for(let i = 0; i < options.length + 1; i++) {

        if (random <= options[0][1]){
            console.log(options[0])}
        else {
            console.log('false')
        }
    }
}
console.log(sorter(db));
pick(db);