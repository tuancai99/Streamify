const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");
const verifyJWT = require("../middleware/verifyJWT");

router.post("/send", verifyJWT, messagesController.sendMessage);

router.get("/:conversationId", verifyJWT, messagesController.getMessages);

module.exports = router;
