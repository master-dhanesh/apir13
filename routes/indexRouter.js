const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.get("/", (req, res, next) => {
    res.status(202).json({ success: true, message: "This is test message." });
    // req => getting data from the frontend
    // res => sending data to the frontend
    // res.send -> text message
    // res.json  -> data json
});

router.post("/register", async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// router.route("/").get((req,res,next)=>{})

module.exports = router;
