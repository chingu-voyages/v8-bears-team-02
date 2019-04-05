const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const router = express.Router();

const User = require('../../models/User');

router.get('/test', (req, res) => {
    res.json({ msg: 'user work' });
});

// @route POST api/user/register
// @desc  Register user
// @access Public
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: 'Email already exists' });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            // Create password hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route POST api/user/login
// @desc  Login user/ return jwt token
// @access Public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check user exists
        if (!user) {
            return res.status(404).json({ email: 'User not found' });
        }

        // Check password match
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Token payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 7 * 24 * 3600
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: `Bearer ${token}`
                        });
                    }
                );
            } else {
                return res.status(400).json({ password: 'Password incorrect' });
            }
        });
    });
});

module.exports = router;
