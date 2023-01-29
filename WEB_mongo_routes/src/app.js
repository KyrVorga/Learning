const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const connect = require("./helpers/connect");
const { User } = require("./models/models");

const app = express();
const port = process.env.PORT || 5000;

// SECTION: Create user
app.post("/user/registration", async (req, res) => {
	try {
		await connect();
		await User.create(req.body, (err, user) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Registration successful");
			}
		});
		res.status(200).send("Registration successful");
	} catch (error) {
		console.log(error);
		res.status(500).send("Registration failed");
	}
});

// SECTION: Login user
app.post("/user/login", async (req, res) => {
	try {
		await connect();
		console.log(req.body);
		let { email, password } = req.body;
		await User.findOne({ email: email }, (err, user) => {
			if (err) {
				console.log(err);
			} else {
				if (user) {
					user.password === password
						? console.log("Login successful")
						: console.log("Incorrect password");
				} else {
					console.log("User not found");
				}
			}
		});
		res.status(200).send("Login successful");
	} catch (error) {
		console.log(error);
		res.status(500).send("Login failed");
	}
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
