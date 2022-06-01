/* ANCHOR Telephone Number Validator
Description:
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.



*/

/* NOTE Planning Area / Psuedo-code / Description / Explanation



*/

/* NOTE Realizations / Mistakes / Corrections / Concepts Learnt



*/

// if (
//   str.replace(/\D/g, "").length == 10 ||
//   str.replace(/\D/g, "").length == 11
// ) {
//   if (str.startsWith("1")) {
//     return str.replace(/\D/g, " ");
//   } else if (str.startsWith("(")) {
//     return str.replace(/\D/g, " ");
//   }
// } else {
//   return false;
// }

// let reversed = str.split('').reverse().join('')
// for(i = str.length; i > 0; i--) {
//   if (i <= 3) {
//     reversed[i]
//   }
// }
// return reversed

function telephoneCheck(str) {
  const patterns = [
    /[0-9]+-[0-9]+-[0-9]+/,
    /\([0-9]+\)[0-9]+-[0-9]+/,
    /\([0-9]+\)\s[0-9]+-[0-9]+/,
    /[0-9]+\s[0-9]+\s[0-9]+/,
    /[0-9]+/,
    /1\s[0-9]+\s[0-9]+\s[0-9]+/,
  ];
  for (let i = 0; i < patterns.length; i++) {
    console.log(patterns[1].test(str));
    // if (str.search(patterns[i]) === -1) {
    //   return false;
    // }
  }
  return true;
}

console.log(telephoneCheck("555-555-5555")); // should return a boolean.

console.log(telephoneCheck("1 555-555-5555")); // should return true.

console.log(telephoneCheck("1 (555) 555-5555")); // should return true.

console.log(telephoneCheck("5555555555")); // should return true.

console.log(telephoneCheck("555-555-5555")); // should return true.

console.log(telephoneCheck("(555)555-5555")); // should return true.

console.log(telephoneCheck("1(555)555-5555")); // should return true.

console.log(telephoneCheck("555-5555")); // should return false.

console.log(telephoneCheck("5555555")); // should return false.

console.log(telephoneCheck("1 555)555-5555")); // should return false.

console.log(telephoneCheck("1 555 555 5555")); // should return true.

console.log(telephoneCheck("1 456 789 4444")); // should return true.

console.log(telephoneCheck("123**&!!asdf#")); // should return false.

console.log(telephoneCheck("55555555")); // should return false.

console.log(telephoneCheck("(6054756961)")); // should return false.

console.log(telephoneCheck("2 (757) 622-7382")); // should return false.

console.log(telephoneCheck("0 (757) 622-7382")); // should return false.

console.log(telephoneCheck("-1 (757) 622-7382")); // should return false.

console.log(telephoneCheck("2 757 622-7382")); // should return false.

console.log(telephoneCheck("10 (757) 622-7382")); // should return false.

console.log(telephoneCheck("27576227382")); // should return false.

console.log(telephoneCheck("(275)76227382")); // should return false.

console.log(telephoneCheck("2(757)6227382")); // should return false.

console.log(telephoneCheck("2(757)622-7382")); // should return false.

console.log(telephoneCheck("555)-555-5555")); // should return false.

console.log(telephoneCheck("(555-555-5555")); // should return false.

console.log(telephoneCheck("(555)5(55?)-5555")); // should return false.

console.log(telephoneCheck("55 55-55-555-5")); // should return false.

console.log(telephoneCheck("11 555-555-5555")); // should return false.