const asyncHandler = require("express-async-handler");

const getTest = asyncHandler(async (req, res) => {
  res.status(200).json({ success: "true", message: "testing API 2" });
});

module.exports = { getTest };
