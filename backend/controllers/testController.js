const asyncHandler = require("express-async-handler");

const getTest = asyncHandler(async (req, res) => {
  res.status(200).json({ success: "true", message: "testing API 3" });
});

module.exports = { getTest };
