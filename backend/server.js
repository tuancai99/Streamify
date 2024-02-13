const express = require("express");
const app = express();

app.use("/", require("./routes/testingRoutes"));

const PORT = process.env.PORT || 5001;

require("dotenv").config();
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");

connectDB();

mongoose.connection.once("open", () => {
	console.log("Connected to MongoDB");
	app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
	console.log(err);
});
