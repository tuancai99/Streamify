const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	username: {
		type: String,
		unique: true,
		required: true,
	},
	name: {
		first: {
			type: String,
			required: true,
		},
		last: {
			type: String,
			required: true,
		},
	},
	password: {
		type: String,
		required: true,
	},
	pictureProfile: {
		type: String,
		default: "",
	},
	admin: {
		type: Boolean,
		default: false,
	},
	active: {
		type: Boolean,
		default: true,
	},
});

module.exports = mongoose.model("User", userSchema);