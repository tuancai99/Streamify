const express = require("express");
const app = express();

app.use("/", require("./routes/testingRoutes"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
