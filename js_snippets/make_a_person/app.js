const Person = function (firstAndLast) {
  let fullName = firstAndLast;
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
  this.getFullName = function () {
    return fullName;
  };
  this.setFirstName = function (first) {
    let last = fullName.split(" ")[1];
    let newName = "".concat(first, " ", last);
    return newName;
  };
  this.setLastName = function (last) {
    let first = fullName.split(" ")[0];
    let newName = "".concat(first, " ", last);
    return newName;
  };
  this.setFullName = function (newName) {
    return newName;
  };
  return fullName;
};

const bob = new Person("Bob Ross");

console.log(bob.getFirstName()); // should return the string Bob.

console.log(bob.getLastName()); // should return the string Ross.

console.log(bob.getFullName()); // should return the string Bob Ross.

bob.setFirstName("Haskell");
console.log(bob.getFullName()); // should return the string Haskell Ross after bob.setFirstName("Haskell").

bob.setLastName("Curry");
console.log(bob.getFullName()); // should return the string Haskell Curry after bob.setLastName("Curry").

bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); // should return the string Haskell Curry after bob.setFullName("Haskell Curry").

bob.setFullName("Haskell Curry");
console.log(bob.getFirstName()); // should return the string Haskell after bob.setFullName("Haskell Curry").

bob.setFullName("Haskell Curry");
console.log(bob.getLastName()); // should return the string Curry after bob.setFullName("Haskell Curry").
