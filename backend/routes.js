const express = require('express');
const router = express.Router();
const User = require('./models/user');

router.post('/signup', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save((err) => {
        if (err) {
            res.status(500).send('Error signing up user');
        } else {
            res.status(200).send('User signed up successfully');
        }
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err) {
            res.status(500).send('Error logging in user');
        } else if (!user) {
            res.status(401).send('Invalid email or password');
        } else {
            res.status(200).send('User logged in successfully');
        }
    });
});

module.exports = router;
