const db = [["Studying",0,0],["Stretching"],["Cosplay"],["Dancing"],["3d moddeling"],["Iso rings"],["juggling"],["drawing"],["music"],["cleaning"]];
// name , times picked, probability

function sorter(arr) {
    const copyArr = [...arr];
    return copyArr.sort((a, b) => b[1] - a[1]).reverse();
}

function pick(options) {
    
    let random = Math.random();
    console.log(random, options);

    for(let i = 0; i < options.length + 1; i++) {

        if (random <= options[0][1]){
            console.log(options[0]);
        }
    }
}
function probabilities(object) {
    const len = object.length + 1;
    for(let i = 0; i < len; i++) {
        // calculate probability base on times picked and assign to db 
    }
}


pick(sorter(db));