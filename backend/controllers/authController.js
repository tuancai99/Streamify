const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: "Email and password required" });
	}

	const foundUser = await User.findOne({ email }).lean().exec();


	if (!foundUser || !foundUser.active) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	if (foundUser.googleId && foundUser.googleId.length > 0) {
		//we need to prompt the user to use sign in with google
		console.log('Google user attempted to sign in username and password.');
	  } else {
		const match = await bcrypt.compare(password, foundUser.password);

		if (!match) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const accessToken = jwt.sign(
			{
				UserInfo: {
					email: foundUser.email,
					admin: foundUser.admin,
				},
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "1m" }
		);

		const refreshToken = jwt.sign(
			{ email: foundUser.email },
			process.env.REFRESH_TOKEN_SECRET,
			{ expiresIn: "1d" }
		);

		// Create secure cookie with refresh token
		res.cookie("jwt", refreshToken, {
			httpOnly: true, //accessible only by web server
			secure: true, //https
			sameSite: "None", //cross-site cookie
			maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
		});

		res.json({ accessToken });
	  }
	  

	
});

// @desc Refresh
// @route GET /auth/refresh
// @access Public
const refresh = (req, res) => {
	const cookies = req.cookies;

	if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

	const refreshToken = cookies.jwt;

	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_SECRET,
		asyncHandler(async (err, decoded) => {
			if (err) return res.status(403).json({ message: "Forbidden" });

			const foundUser = await User.findOne({
				email: decoded.email,
			}).exec();

			if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

			const accessToken = jwt.sign(
				{
					UserInfo: {
						email: foundUser.email,
						admin: foundUser.admin,
					},
				},
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: "1m" }
			);

			res.json({ accessToken });
		})
	);
};

// @desc Logout
// @route POST /auth/logout
// @access Public
const logout = (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) {
		return res.sendStatus(204);
	} //No content

	res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
	res.json({ message: "Cookie cleared" });
};

const signUp = asyncHandler(async (req, res) => {
	//this will add the user to the database?
	console.log('Im signing the user up!');
});

module.exports = { login, refresh, logout, signUp };
