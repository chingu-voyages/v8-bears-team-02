const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const User = require('../../models/User');

router.get('/test', (req, res) => {
    res.json({ msg: 'user work' });
});

// @route POST api/user/register
// @desc  Register user
// @access Public
router.post('/register', (req, res) => {
    // check validation
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                username: req.body.username,
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
    // check validation
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check user exists
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

        // Check password match
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Token payload
                const payload = {
                    id: user.id,
                    username: user.username
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
                errors.password = 'Password incorrect';
                return res.status(400).json(errors);
            }
        });
    });
});

module.exports = router;
