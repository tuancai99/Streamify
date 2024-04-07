const express = require("express");
const router = express.Router();
const conversationsController = require("../controllers/conversationsController");
const verifyJWT = require("../middleware/verifyJWT");

router.post("/", verifyJWT, conversationsController.createConversation);

router.get("/:userId", verifyJWT, conversationsController.getUserConversations);

router.get(
	"/:conversationId",
	verifyJWT,
	conversationsController.getConversationById
);

router.put(
	"/:conversationId",
	verifyJWT,
	conversationsController.addParticipant
);

module.exports = router;
