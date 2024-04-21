const User = require("../models/userModel");

exports.home = (req, res, next) => {
    res.status(202).json({ success: true, message: "This is test message." });
};

exports.register = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.readall = async (req, res, next) => {
    try {
        const users = await User.find();
        // const users = await User.find().exec();
        // const users = await User.find().select("+password");
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
