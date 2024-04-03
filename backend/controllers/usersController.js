const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find().select("-password").lean();

	if (!users?.length) {
		return res.status(400).json({ message: "No users found" });
	}

	res.json(users);
});

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
	const { email, nameFirst, nameLast, password } = req.body;

	if (!email) {
		return res.status(400).json({ message: "Email required" });
	} else if (!nameFirst || !nameLast) {
		return res
			.status(400)
			.json({ message: "First name and last name required" });
	} else if (!password) {
		return res.status(400).json({ message: "Password required" });
	}

	const username =
		req.body.username === undefined ? email.split("@")[0] : req.body.username;

	const duplicateEmail = await User.findOne({ email }).lean().exec();

	if (duplicateEmail) {
		return res.status(409).json({ message: "Email already in use" });
	}

	const duplicateUsername = await User.findOne({ username }).lean().exec();

	if (duplicateUsername) {
		return res.status(409).json({ message: "Username already exists" });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const userObject = {
		email,
		username,
		name: {
			first: nameFirst,
			last: nameLast,
		},
		password: hashedPassword,
	};

	const user = await User.create(userObject);

	if (user) {
		res.status(201).json({ message: `New user ${username} created.` });
	} else {
		res.status(400).json({ message: "Invalid user data received" });
	}
});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
	const {
		id,
		email,
		username,
		nameFirst,
		nameLast,
		pictureProfile,
		admin,
		active,
		password,
	} = req.body;

	if (
		!id ||
		!email ||
		!username ||
		!nameFirst ||
		!nameLast ||
		!pictureProfile ||
		typeof admin !== "boolean" ||
		typeof active !== "boolean"
	) {
		return res
			.status(400)
			.json({ message: "All fields except password are required" });
	}

	const user = await User.findById(id).exec();

	if (!user) {
		return res.status(400).json({ message: "User not found" });
	}

	const duplicateEmail = await User.findOne({ email }).lean().exec();

	if (duplicateEmail && duplicateEmail?._id.toString() !== id) {
		return res.status(409).json({ message: "Email already in use" });
	}

	const duplicateUsername = await User.findOne({ username }).lean().exec();

	if (duplicateUsername && duplicateUsername?._id.toString() !== id) {
		return res.status(409).json({ message: "Username already exists" });
	}

	user.email = email;
	user.username = username;
	user.name.first = nameFirst;
	user.name.last = nameLast;
	user.pictureProfile = pictureProfile;
	user.admin = admin;
	user.active = active;

	if (password) {
		user.password = await bcrypt.hash(password, 10);
	}

	const updatedUser = await user.save();

	res.json({ message: `${updatedUser.username} updated.` });
});

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
	const { id } = req.body;

	if (!id) {
		return res.status(400).json({ message: "User ID required" });
	}

	const user = await User.findById(id).exec();

	if (!user) {
		res.status(400).json({ message: "User not found" });
	}

	await user.deleteOne();

	const reply = `Username ${user.username} with ID ${user._id} deleted`;

	res.json(reply);
});

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
