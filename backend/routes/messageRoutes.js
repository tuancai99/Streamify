const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");
const verifyJWT = require("../middleware/verifyJWT");

router.get("/:id", verifyJWT, messagesController.getMessages);
router.post("/send/:id", verifyJWT, messagesController.sendMessage);

module.exports = router;
