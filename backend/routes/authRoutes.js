require("dotenv").config();
require("../config/passport");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");
const loginLimiter = require("../middleware/loginLimiter");
const bcrypt = require("bcrypt");

router.route("/").post(loginLimiter, authController.login);

router.route("/refresh").get(authController.refresh);

router.route("/logout").post(authController.logout);

//This redirects to google authentication using passport.
router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

//This is the route for the auth callback. If the google auth was successful, then it can redirect to another page.
router.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	(req, res) => {
		// Successful authentication, redirect home or to another page
		console.log("Successful authentication");
		res.redirect("/");
	}
);

//This is a logout router. It ends the session of the user.
router.get("/logout", function (req, res, next) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		req.session.destroy(() => {
			console.log("Successful termination of session");
			res.redirect("/");
		});
	});
});

module.exports = router;
