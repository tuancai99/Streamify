const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
	optionsSuccessStatus: 200,
	allowedHeaders: 'Content-Type,Authorization',
  	methods: 'GET,POST,PUT,DELETE'
};

module.exports = corsOptions;
