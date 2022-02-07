const db = [['option a',0.1],['option b', 0.15],['option c',0.25],['option d',0.5]]

    function pick(options) {
    random = Math.random()
    console.log(random);
    
    if (random <= options[0][1]){
        console.log(options[0])}
    else {
        console.log('false')
    }
}

pick(db);