const val = '1451001600000';
const val1 = '2015-13-25';

const input = 'date';

const convertToDate = (input, done) => {
    if (input === '' || input === undefined || input === null) {
      var date = new Date()
    }
    else if (isNaN(Number(input))) {
      var date = new Date(input);
    } 
    else {
      var date = new Date(Number(input));
    }

    if (date == 'Invalid Date') {
      console.log({ error : "Invalid Date" });
    } else {

        done(date)
    }
  }


  convertToDate(input, (date) => {
    let utc = date.toUTCString();
    let unix = date.getTime()
    console.log({"unix": unix, "utc": utc});
  });