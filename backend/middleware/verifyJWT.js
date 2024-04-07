const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization;

	if (!authHeader?.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	const token = authHeader.split(" ")[1];

	console.log("Auth Header:", authHeader);
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) {
			console.log("JWT Verification Error:", err.message);
			return res.status(403).json({ message: "Forbidden" });
		}

		console.log("Decoded JWT:", decoded);
		req.user = decoded.UserInfo;
		next();
	});
};

module.exports = verifyJWT;
