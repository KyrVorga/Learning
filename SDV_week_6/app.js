// outerFunc is defined, has global scope
function outerFunc() {
  // msg is defined, has block scope within outerFunc
  var msg = "hello world!";

  // innerFunc is defined, scope is Block scope within outerFunc
  function innerFunc() {
    // log message which can be accessed because it is within the scope of outerFunc
    console.log(msg); // Hello world!
  }
  // innerFunc has no return value so its undefined.
  console.log(innerFunc()); // Undefined
}
// outerFunc has no return value so its undefined.
console.log(outerFunc()); // Undefined

// Lexical scope is the location where something was defined.
