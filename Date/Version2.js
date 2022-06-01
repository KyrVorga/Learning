class MyDate {
  constructor(date) {
    this.monthNames = {
      January: [1, 31],
      Febuary: [2, 28],
      March: [3, 31],
      April: [4, 30],
      May: [5, 31],
      June: [6, 30],
      July: [7, 31],
      August: [8, 31],
      September: [9, 30],
      October: [10, 31],
      November: [11, 30],
      December: [12, 31],
    };

    this.date = new Date(this.transform(date));
    this.splitDate(this.date);
  }

  transform(toTransform) {
    let month = {};
    let day = Number.parseInt(toTransform.match(/\d{1,2}/));
    let year = Number.parseInt(toTransform.match(/\d{4}/));

    if (toTransform.replace(/\D+/g, " ").trim().split(" ").length < 3) {
      Object.keys(this.monthNames).forEach((elem) => {
        if (toTransform.toLowerCase().includes(elem.toLowerCase())) {
          month.text = elem;
          month.num = this.monthNames[elem][0];
        }
      });
    } else {
      month.num = toTransform.replace(/\D+/g, " ").trim().split(" ")[1];
      Object.keys(this.monthNames).forEach((elem) => {
        if (this.monthNames[elem][0] == month.num) month.text = elem;
      });
    }
    return [day, month.num, month.text, year];
  }

  splitDate(validDate) {
    // this.day = validDate.getDate();
    // this.month.num = validDate.getMonth();
    // this.year = validDate.getFullYear();
  }

  printDates() {
    console.log(this.transform("the 21st of the 4th 2022"));
    // if (this.date == "Invalid Date") {
    //   return "Error, invalid input";
    // } else {
    //   return `${this.month.num + 1}/${this.day}/${this.year} \n| ${
    //     this.month.text
    //   } ${this.day}, ${this.year} \n| ${this.month.text} ${this.day} ${
    //     this.year
    //   }`;
    // }
  }

  increment() {
    this.date.setDate((this.day += 1));
    this.splitDate(this.date);
  }

  decrement() {
    this.date.setDate((this.day -= 1));
    this.splitDate(this.date);
  }

  subtract(newDate) {
    return Math.round(
      Math.abs((this.date - new Date(newDate)) / (1000 * 60 * 60 * 24))
    );
  }
}

// ANCHOR Input cases

const date1 = new MyDate("the 21st of the 4th 2022");
console.log(date1.printDates());
console.log(date1.subtract("20th May 2022"));

// const date2 = new MyDate("april 15th 2021");
// console.log(date2.printDates());
// console.log(date2.subtract("the 21st of the 4th 2022"));

// end of year test case
const date3 = new MyDate("31/12/2021");
console.log(date3.printDates());
console.log(date3.increment());
console.log(date3.printDates());
console.log(date3.subtract("may 15th 2021"));

// // // start of year test case
// const date4 = new MyDate("1/1/2023");
// console.log(date4.printDates());
// date4.decrement();
// console.log(date4.printDates());
// console.log(date4.subtract("31/12/2021"));

// const date5 = new MyDate("5 6 2022");
// console.log(date5.printDates());
// console.log(date5.subtract("1/1/2023"));

// const date6 = new MyDate("12th of May 2021");
// console.log(date6.printDates());
// console.log(date6.subtract("5 6 2022"));

// console.log(date1.transform("the 21st of the 4th 2022"));
