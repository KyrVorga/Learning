/* ANCHOR Assessment One - Calendar App
Description: 
  • First Requirement (30 marks)
  Design a class called Date. The class should store a date in three integers: month, day, and year. 
  There should be member functions to print the date in the following formats: 12/25/10, December 25, 2010, 25 December 2010.
  Input Validation: Do not accept values for the day greater than 31 or less than 1. Do not accept values for the month greater
  than 12 or less than 1.

  • Second Requirement (35 marks)
  The Date class version should have the following overloaded operators:
  o ++ Prefix and postfix increment operators. These operators should increment the object’s day member.
  o -- Prefix and postfix decrement operators. These operators should decrement the object’s day member.
  o - Subtraction operator. If one Date object is subtracted from another, the operator should give the number of
  days between the two dates. For example, if April 10, 2010 is subtracted from April 18, 2010, the result will be 8.

  • Third Requirement (35 marks)
  Demonstrate the class’s capabilities in a program using JavaScript. The class should detect the following conditions and
  handle them accordingly:
  o When a date is set to the last day of the month and incremented, it should become the first day of the following
  month.
  o When a date is set to December 31 and incremented, it should become January 1 of the following year.
  o When a day is set to the first day of the month and decremented, it should become the last day of the previous
  month.
  o When a date is set to January 1 and decremented, it should become December 31 of the previous year.
  Demonstrate the class’s capabilities in a program using JavaScript.
*/

/* NOTE Planning Area / Psuedo-code / Description / Explanation

*/

/* NOTE Realizations / Mistakes / Corrections / Concepts Learnt

*/

class Date {
  constructor(date) {
    this.monthNames = {
      January: { num: 1, days: 31 },
      Febuary: { num: 2, days: 28 },
      March: { num: 3, days: 31 },
      April: { num: 4, days: 30 },
      May: { num: 5, days: 31 },
      June: { num: 6, days: 30 },
      July: { num: 7, days: 31 },
      August: { num: 8, days: 31 },
      September: { num: 9, days: 30 },
      October: { num: 10, days: 31 },
      November: { num: 11, days: 30 },
      December: { num: 12, days: 31 },
    };

    // regex matches first digit character that is length 1 or 2
    this.day = Number.parseInt(date.match(/\d{1,2}/));
    // regex matches first digit character that is length 4
    this.year = Number.parseInt(date.match(/\d{4}/));

    // this removes all text from the date then checks hw many numbers are left
    if (date.replace(/\D+/g, " ").trim().split(" ").length < 3) {
      // if there are only 2 numbers then the month is a string it, then loops through the monthNames array to check which month the date contains
      Object.keys(this.monthNames).forEach((elem) => {
        if (date.toLowerCase().includes(elem.toLowerCase())) {
          // assign both the string and number formats
          this.monthText = elem;
          this.monthNum = this.monthNames[elem].num;
        }
      });
      // else there were 3 numbers
    } else {
      // assign both the string and number formats
      this.monthNum = date.replace(/\D+/g, " ").trim().split(" ")[1];
      this.monthText = Object.keys(this.monthNames).find(
        (key) => this.monthNames[key].num == this.monthNum
      );
    }
    /* TODO add input validation on date 
        date should't have any out of bounds values
        it should reject any non number values
        will be in a date format as a string, 11/12/2013
        destructure date into seperate values
        if month name is provided convert to number
    */
  }

  // ANCHOR PrintDates
  // prints out the date in to each of the required formats
  printDates() {
    return `${this.day}/${this.monthNum}/${this.year}\n${this.monthText} ${this.day}, ${this.year}\n${this.day} ${this.monthText} ${this.year}`;
  }

  // ANCHOR Increment
  // increment day member by one
  increment() {
    // check if day is at the max for that month
    if (this.day === this.monthNames[this.monthText].days) {
      // check month is december, then set day and month to 1 and increment year
      if (this.monthNum == 12) {
        [this.day, this.monthNum, this.monthText] = [1, 1, "January"];
        this.year++;
        // otherwise its not december, set day to 1 and increment month
      } else {
        this.day = 1;
        this.monthNum++;
        this.monthText = Object.keys(this.monthNames).find(
          (key) => this.monthNames[key].num == this.monthNum
        );
      }
      // else day is less than max, increment day
    } else {
      this.day++;
    }
    return this.day;
  }

  // ANCHOR Decrement
  // Decrement day member by one
  decrement() {
    // check if day is 1
    if (this.day == 1) {
      // check month is january, then set day to 31 month to december and decrement year
      if (this.monthNum == 1) {
        [this.day, this.monthNum, this.monthText] = [31, 12, "December"];
        this.year--;
        // otherwise its not januray, set day to 31 and decrement month
      } else {
        this.monthNum--;
        this.monthText = Object.keys(this.monthNames).find(
          (key) => this.monthNames[key].num == this.monthNum
        );
        this.day = this.monthNames[this.monthText].days;
      }
      // else day is greater than 1, decrement day
    } else {
      this.day--;
    }
    return this.day;
  }

  // ANCHOR Subtract
  // Return the difference between the Member date and the date provided as an argument
  subtract(date) {
    /* TODO should return the difference between the classes date and the date provide as an argument
        probably will split both objects up and then get difference of each value and the join again
    */
    // regex matches first digit character that is length 1 or 2
    this.newDay = Number.parseInt(date.match(/\d{1,2}/));
    // regex matches first digit character that is length 4
    this.newYear = Number.parseInt(date.match(/\d{4}/));
    let difference = 0;
    // this removes all text from the date then checks hw many numbers are left
    if (date.replace(/\D+/g, " ").trim().split(" ").length < 3) {
      // if there are only 2 numbers then the month is a string it, then loops through the monthNames array to check which month the date contains
      Object.keys(this.monthNames).forEach((elem) => {
        if (date.toLowerCase().includes(elem.toLowerCase())) {
          // assign both the string and number formats
          this.newMonth = this.monthNames[elem].num;
        }
      });
      // else there were 3 numbers
    } else {
      // assign both the string and number formats
      this.newMonth = date.replace(/\D+/g, " ").trim().split(" ")[1];
    }
    let days = Object.entries(this.monthNames)[this.newMonth];
    console.log(days);
    console.log(this.monthNames[parseInt(this.newMonth)]);
    console.log(
      this.newDay + Number.parseInt(this.newMonth) * 31 + this.newYear * 365
    );
    console.log(
      this.day + Number.parseInt(this.monthNum) * 31 + this.year * 365
    );
  }
}

// ANCHOR Input cases
const date = new Date("20th May 2022");
console.log(date.printDates());
console.log(date.subtract("15/6/2022"));

const date1 = new Date("the 21st of the 4th 2022");
console.log(date1.printDates());
console.log(date1.subtract("20th May 2022"));

const date2 = new Date("may 15th 2021");
console.log(date2.printDates());
console.log(date2.subtract("the 21st of the 4th 2022"));

// start of year test case
const date3 = new Date("31/12/2021");
console.log(date3.printDates());
console.log(date3.increment(date.day));
console.log(date3.printDates());
console.log(date3.subtract("may 15th 2021"));

// start of year test case
const date4 = new Date("1/1/2023");
console.log(date4.printDates());
console.log(date4.decrement(date.day));
console.log(date4.printDates());
console.log(date4.subtract("31/12/2021"));

const date5 = new Date("5 6 2022");
console.log(date5.printDates());
console.log(date5.subtract("1/1/2023"));

const date6 = new Date("12th of May 2021");
console.log(date6.printDates());
console.log(date6.subtract("5 6 2022"));

// const date7 = new Date(23, 6, 2022)

// this.day = day
// // ...
