const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const asyncHandler = require("express-async-handler");
const { getReceiverSocketId, io } = require("../socket/socket");

// @desc Create and send a message
// @route POST /messages
// @access Private
const sendMessage = asyncHandler(async (req, res) => {
	const { message, conversationId } = req.body;
	const senderId = req.user._id;

	const conversation = await Conversation.findById(conversationId);
	if (!conversation) {
		return res.status(404).json({ message: "Conversation not found." });
	}
	if (!conversation.participants.includes(senderId)) {
		return res
			.status(403)
			.json({ message: "Sender is not a participant of the conversation." });
	}

	const newMessage = new Message({
		senderId,
		conversationId,
		message,
	});
	await newMessage.save();

	conversation.messages.push(newMessage._id);
	await conversation.save();

	conversation.participants.forEach((participantId) => {
		const receiverSocketId = getReceiverSocketId(participantId.toString());
		if (receiverSocketId) {
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}
	});

	res.status(201).json(newMessage);
});

const getMessages = asyncHandler(async (req, res) => {
	const { conversationId } = req.params;

	const conversation = await Conversation.findById(conversationId).populate(
		"messages"
	);
	if (!conversation) {
		return res.status(404).json({ message: "Conversation not found." });
	}

	res.json(conversation.messages);
});

module.exports = { sendMessage, getMessages };
