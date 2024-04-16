// setting dotenv file
require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

// db connection
require("./models/connect").mongoconnection();

const indexRouter = require("./routes/indexRouter");

// setting logger
app.use(require("morgan")("tiny"));

// router setup -> must be second last in the file
app.use("/api/user", indexRouter);

// creating server --must be at the last
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
