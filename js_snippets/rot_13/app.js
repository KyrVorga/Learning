function rot13(str) {
  let arr = str.split("");
  let array = [];
  arr.forEach((element) => {
    let code = element.charCodeAt(0);
    if (code >= 78 && code < 91) {
      array.push(String.fromCodePoint(code - 13));
    } else if (code < 78 && code > 64) {
      array.push(String.fromCodePoint(code + 13));
    } else {
      array.push(String.fromCodePoint(code));
    }
  });
  return array.join("");
}
console.log(rot13("ABCDEFGHIJKLM   NOPQRSTUVWXYZ"));
console.log(rot13("SERR PBQR PNZC")); //should decode to the string FREE CODE CAMP

console.log(rot13("SERR CVMMN!")); // should decode to the string FREE PIZZA!

console.log(rot13("SERR YBIR?")); // should decode to the string FREE LOVE?

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
