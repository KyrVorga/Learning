// 1	2	3	4	5	6	7	8	9 10 20 30 40 50 60 70 80 90 100 200 300 400 500 600 700 800 900

function convertToRoman(num) {
  const numerals = [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["M", "MM", "MMM"],
  ];
  let string = [];
  let split = num.toString().split("").reverse();
  split.forEach((element, i) => {
    console.log(numerals[i][parseInt(element) - 1]);
    string.unshift(numerals[i][parseInt(element) - 1]);
  });
  return string.join("");
}

console.log(convertToRoman(45));

console.log(convertToRoman(2)); // should return the string II.

console.log(convertToRoman(3)); // should return the string III.

console.log(convertToRoman(4)); // should return the string IV.

console.log(convertToRoman(5)); // should return the string V.

console.log(convertToRoman(9)); // should return the string IX.

console.log(convertToRoman(12)); // should return the string XII.

console.log(convertToRoman(16)); // should return the string XVI.

console.log(convertToRoman(29)); // should return the string XXIX.

console.log(convertToRoman(44)); // should return the string XLIV.

console.log(convertToRoman(45)); // should return the string XLV.

console.log(convertToRoman(68)); // should return the string LXVIII

console.log(convertToRoman(83)); // should return the string LXXXIII

// console.log(convertToRoman(97)); // should return the string XCVII

// console.log(convertToRoman(99)); // should return the string XCIX

// console.log(convertToRoman(400)); // should return the string CD

// console.log(convertToRoman(500)); // should return the string D

// console.log(convertToRoman(501)); // should return the string DI

// console.log(convertToRoman(649)); // should return the string DCXLIX

// console.log(convertToRoman(798)); // should return the string DCCXCVIII

// console.log(convertToRoman(891)); // should return the string DCCCXCI

// console.log(convertToRoman(1000)); // should return the string M

// console.log(convertToRoman(1004)); // should return the string MIV

// console.log(convertToRoman(1006)); // should return the string MVI

// console.log(convertToRoman(1023)); // should return the string MXXIII

// console.log(convertToRoman(2014)); // should return the string MMXIV

// console.log(convertToRoman(3999)); // should return the string MMMCMXCIX
