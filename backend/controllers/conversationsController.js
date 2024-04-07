const Conversation = require("../models/Conversation");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @desc Create new conversation
// @route POST /conversations
// @access Private
const createConversation = asyncHandler(async (req, res) => {
	let { participants, type } = req.body;
	const loggedInUserId = req.user._id;

	if (!participants.includes(loggedInUserId)) {
		participants = [...participants, loggedInUserId];
	}

	if (!participants || participants.length < 2) {
		return res
			.status(400)
			.json({ message: "A conversation must have at least two participants." });
	}

	for (const userId of participants) {
		const userExists = await User.exists({ _id: userId });
		if (!userExists) {
			return res.status(404).json({ message: `User ${userId} not found.` });
		}
	}

	const conversation = new Conversation({
		participants,
		type: type || "two",
	});

	await conversation.save();
	res.status(201).json(conversation);
});

// @desc Get conversations by user ID
// @route GET /conversations/:userId
// @access Private
const getUserConversations = asyncHandler(async (req, res) => {
	const userId = req.params.userId;

	const user = await User.findById(userId);

	if (!user) {
		return res.status(404).json({ message: "User not found." });
	}

	const conversations = await Conversation.find({
		participants: { $in: [userId] },
	}).populate("participants", "username email");

	if (!conversations) {
		return res
			.status(404)
			.json({ message: "No conversations found for this user." });
	}

	res.json(conversations);
});

// @desc Get a specific conversation by ID
// @route GET /conversations/:conversationId
// @access Private
const getConversationById = asyncHandler(async (req, res) => {
	const conversationId = req.params.conversationId;

	const conversation = await Conversation.findById(conversationId).populate(
		"messages"
	);

	if (!conversation) {
		return res.status(404).json({ message: "Conversation not found." });
	}

	res.json(conversation);
});

// @desc Add a participant to a conversation
// @route PUT /conversations/:conversationId
// @access Private
const addParticipant = asyncHandler(async (req, res) => {
	const { conversationId, userId } = req.body;

	const userExists = await User.exists({ _id: userId });

	if (!userExists) {
		return res.status(404).json({ message: "User not found." });
	}

	const conversation = await Conversation.findById(conversationId);

	if (!conversation) {
		return res.status(404).json({ message: "Conversation not found." });
	}

	if (conversation.participants.includes(userId)) {
		return res.status(400).json({ message: "User already a participant." });
	}

	conversation.participants.push(userId);
	await conversation.save();
	res.status(200).json({ message: "Participant added.", conversation });
});

module.exports = {
	createConversation,
	getUserConversations,
	getConversationById,
	addParticipant,
};
