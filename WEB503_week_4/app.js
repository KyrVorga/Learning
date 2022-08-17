// deleteBtn has an event listner that listens for a click event and then
// runs a callback function that gets the id of the button that was clicked
// and then deletes the element with that id.

deleteBtn.addEventListener("click", (e) => {
	let id = e.target.parentElement.parentElement.getAttribute("data-id");
	db.collection("todos").doc(id).delete();
});
