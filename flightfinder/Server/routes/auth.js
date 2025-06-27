const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (err) {
        res.status(400).send('User already exists or error occurred');
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.status(200).json({ message: "Login successful", user });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

module.exports = router;
