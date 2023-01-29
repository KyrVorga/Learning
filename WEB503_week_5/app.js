// add button
const addButton = document.getElementById("add");

// click event listener for the add button
addButton.addEventListener("click", function () {
	// get the value of the input field
	const input = document.getElementById("input").value;
	// create a new li element
	const li = document.createElement("li");
	// create a text node with the value of the input field
	const text = document.createTextNode(input);
	// append the text node to the li element
	li.appendChild(text);
	// get the unordered list
	const ul = document.getElementById("list");
	// append the li element to the unordered list
	ul.appendChild(li);
});
