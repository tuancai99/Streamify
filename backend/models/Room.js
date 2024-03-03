const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	participants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

module.exports = mongoose.model("Room", roomSchema);
