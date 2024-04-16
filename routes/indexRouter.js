const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("This is test message.");
    // req => getting data from the frontend
    // res => sending data to the frontend
    // res.send -> text message
    // res.json  -> data json
});

// router.route("/").get((req,res,next)=>{})

module.exports = router;
