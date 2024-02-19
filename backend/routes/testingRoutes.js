const express = require("express");
const router = express.Router();
const testingController = require("../controllers/testController");

router.route("/").get(testingController.getTest);

module.exports = router;
