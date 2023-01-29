const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
});

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

const listSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	items: {
		type: Array,
		required: false,
	},
	category: {
		type: String,
		required: true,
	},
});

const noteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	list: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", userSchema);
const Category = mongoose.model("Category", categorySchema);
const List = mongoose.model("List", listSchema);
const Note = mongoose.model("Note", noteSchema);

module.exports = { User, Category, List, Note };
