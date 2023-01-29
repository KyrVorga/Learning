// Optional Chaining
person = {
	name: "Rhylei",
	age: 21,
};

console.log(person.name, person?.email);

// Nulish Coalescing
const a = 0;
const b = a || "other";
const c = a ?? "other";

console.log(b, c);

// Higher order functions
// function declaration
function sum(a, b) {
	return a + b;
}

// arrow function expression
const sum1 = (a, b) => {
	return a + b;
};
// function expression
const sum2 = function (a, b) {
	return a + b;
};

// Closures
function outer() {
	let x = 1;
	function inner() {
		x = x + 1;
	}
}

//HOF variant
function outer() {
	let x = 1;
	function inner() {
		x = x + 1;
	}
	return inner;
}
const incrementX = outer();
incrementX(); // x = 2
incrementX(); // x = 3
