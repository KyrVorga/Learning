// // create a function that takes an integer (mins) and convert it to seconds

// const toSeconds = (minutes) => minutes * 60;

// toSeconds(5);

// // create a function that takes an array of only numbers and return the first value

// const first = (array) => array[0];

// first([1, 2, 3]);

// const totalPrice = (array) => {
// 	let total = 0;

// 	for (let i = 0; i < array.length; i++) {
// 		total += array[i].price * array[i].quantity;
// 	}

// 	return total;
// };

// const totalPrice = (array) => {
// 	let total = 0;

// 	array.forEach((element) => {
// 		total += element.price * element.quantity;
// 	});

// 	return total;
// };

// const totalPrice = (array) =>
// 	array.reduce(
// 		(previousValue, currentValue) =>
// 			previousValue + currentValue.price * currentValue.quantity,
// 		0
// 	);

// totalPrice([
// 	{ item: "ram", quantity: 2, price: 10 },
// 	{ item: "cpu", quantity: 1, price: 20 },
// 	{ item: "case", quantity: 1, price: 30 },
// ]);

const getNumbers = (array) => array.filter((element) => /\d/.test(element));
getNumbers(["1A", "abc", "C5", "Ali", "ab4dnm6890"]);
