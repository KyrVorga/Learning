class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}
let time = new Date(25, 12, 2021);
console.log(time.year);

const readline = require("readline");
// call interface.close() after using
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("What is the current date? ", (date) => {
  console.log(`The date is ${date}`);
  interface.close();
});
