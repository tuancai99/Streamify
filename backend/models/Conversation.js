const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
	{
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
				default: [],
			},
		],
		type: {
			type: String,
			enum: ["two", "multiple"],
			required: true,
			default: "two",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Conversation", conversationSchema);
