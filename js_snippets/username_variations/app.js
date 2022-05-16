class Username {
  constructor(name){
    this.name = name.toLowerCase(); //.split('')
    this.list = []
  }

  change() {
    for (let i = 0; i < this.name.length; i++) {
      for(let j = 1; j < 26; j++) {
        if (this.name.charCodeAt(i)+j > 122) {
          this.list.push(
            this.name.replace(this.name.at(i), String.fromCharCode(this.name.charCodeAt() + j -26))
            )
        } else {
          this.list.push(
            this.name.replace(this.name.at(i), String.fromCharCode(this.name.charCodeAt() + j ))
            )
        }
      }
    }
  }
}

const username = new Username('TyrMorga')
username.change()
console.log(username.list);
let item = username.list[1780];
console.log(item.charCodeAt(7));


console.log('z'.charCodeAt());




/* 
iterate over each letter of provided string
  if the charCode plus j is greater than 122 then loop it back to 97




*/