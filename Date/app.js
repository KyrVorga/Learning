class MyDate {
  constructor(date) {
    this.date = new Date(date);
    // i decided to throw an error here so that it stops execution and doesnt run the other method calls, it also removes the need for error checking in each method
    if (this.date == "Invalid Date") {
      throw new Error("Error, invalid input");
    }
    this.splitDate();
  }
  // creates the day,month and year properties, as well as updates them
  splitDate() {
    this.day = this.date.getDate();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
  }
  // checks if the date is invalid, then returns the date in three formats (the Date.getMonth() returns month with a base 0 index)
  printDates() {
    // change this back to one line and dont let prettier fix it
    const months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // change this back to one line and dont let prettier fix it
    let format1 = `${(this.month += 1)}/${this.day}/${this.year}`;
    let format2 = `${months[this.month - 1]} ${this.day}, ${this.year}`;
    let format3 = `${this.day} ${months[this.month - 1]} ${this.year}`;
    return `${format1}\n${format2}\n${format3}`;
  }

  // increments the this.date property and then calls splitDate() to update the day,month and year properties
  increment() {
    this.date.setDate((this.day += 1));
    this.splitDate();
  }

  // decrements the this.date property and then calls splitDate() to update the day,month and year properties
  decrement() {
    this.date.setDate((this.day -= 1));
    this.splitDate();
  }

  // checks if both dates are invalid, then returns the absolute difference of the two dates (rounded because.. well Javascript..)
  subtract(newDate) {
    if (new Date(newDate) == "Invalid Date") {
      return "Error, second date is invalid";
    } else {
      return Math.round(
        Math.abs((this.date - new Date(newDate)) / (1000 * 60 * 60 * 24))
      );
    }
  }
}

// ANCHOR Input cases

//start of year test
const date = new MyDate("12/1/2023");
console.log(date.printDates());
date.decrement();
console.log(date.printDates());
date.increment();
console.log(date.printDates());
console.log(date.subtract("4/25/22"));

// end of year
const date2 = new MyDate("12/31/22");
console.log(date2.printDates());
date2.increment();
console.log(date2.printDates());
date2.decrement();
console.log(date2.printDates());
console.log(date2.subtract("2/18/23"));

// random date
const date3 = new MyDate("2/18/23");
console.log(date3.printDates());
date3.increment();
console.log(date3.printDates());
date3.decrement();
console.log(date3.printDates());
console.log(date3.subtract("4/25/22"));

// month as text
const date4 = new MyDate("1 may 2024");
console.log(date4.printDates());
date4.increment();
console.log(date4.printDates());
date4.decrement();
console.log(date4.printDates());
console.log(date4.subtract("4/25/22"));

/*
list of valid input formats
month day year
month-day-year
month/day/year
// any mix of seperators will work
day can be written first only if the month is written as text
*/
// Invalid inputs

// day first
const date5 = new MyDate("31 1 2023");
console.log(date5.printDates());

// adding text
const date6 = new MyDate("1st of the 4th 2023");
console.log(date6.printDates());

// day to large
const date7 = new MyDate("32 may 2023");
console.log(date7.printDates());

// spelling errors
const date8 = new MyDate("1 mae 2023");
console.log(date8.printDates());

// values too high
const date9 = new MyDate("18/18/23");
console.log(date9.printDates());

// values too low
const date10 = new MyDate("0/0/23");
console.log(date10.printDates());

// subtract method errors
console.log(date.subtract("31 1 2023"));
console.log(date2.subtract("1st of the 4th 2023"));

// if the original date is wrong it will ignore the date being passed and return an error
console.log(date5.subtract("1 mae 2023"));
console.log(date6.subtract("32 may 2023"));
console.log(date7.subtract("4/25/22"));
