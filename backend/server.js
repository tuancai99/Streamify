require("dotenv").config();
<<<<<<< HEAD
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5001;
=======
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const session = require('express-session');
const passport = require('passport');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if using https
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use("/", require("./routes/testingRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/", require("./routes/authRoutes"));


const PORT = process.env.PORT || 5001;



>>>>>>> 6ffd3f85497ac4f1272e7ee6206677d8086c7bd6

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
