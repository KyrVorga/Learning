const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.MONGO_URI;

const connect = async () => {
	try {
		await mongoose.connect(connectionString);
		console.log("Successfully connected to Database!");
	} catch (error) {
		console.log(error);
	}
};

module.exports = connect;
