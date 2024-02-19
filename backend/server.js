require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/testingRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));

mongoose.connection.once("open", () => {
	console.log("Connected to MongoDB");
	app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
	console.log(err);
});
