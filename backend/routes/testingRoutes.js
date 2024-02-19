const express = require("express");
const router = express.Router();
const testingController = require("../controllers/testController");

router.route("/testing").get(testingController.getTest);

module.exports = router;
