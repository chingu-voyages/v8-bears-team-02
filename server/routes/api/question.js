const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load input validation
const validateQuestionInput = require('../../validation/question');

const Question = require('../../models/Question');

// @route POST api/question/create
// @desc  Create a new question
// @access Private
router.post(
    '/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // check validation
        const { errors, isValid } = validateQuestionInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newQuestion = new Question({
            user: req.user.id,
            title: req.body.title,
            content: req.body.content
        });

        newQuestion
            .save()
            .then(question => res.json(question))
            .catch(err => console.log(err));
    }
);

// @route GET api/question/all
// @desc  Returns all questions
// @access Public
router.get('/', (req, res) => {
    Question.find({})
        .then(questions => res.json(questions))
        .catch(err =>
            res.status(404).json({ noquestionfound: 'Questions no found' })
        );
});

// @route GET api/question/search
// @desc  Find all questions  by search query
// @access Public
router.post('/search', (req, res) => {
    console.log(req.body);
    Question.find({
        $or: [
            { title: { $regex: req.body.searchQuery, $options: 'i' } },
            { content: { $regex: req.body.searchQuery, $options: 'i' } }
        ]
    })
        .then(questions => res.json(questions))
        .catch(err =>
            res.status(404).json({ noquestionfound: 'Questions no found' })
        );
});

// @route GET api/question/:id
// @desc  Find question by id
// @access Public
router.get('/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(question => res.json(question))
        .catch(err =>
            res.status(404).json({ noquestionfound: 'No question found' })
        );
});

module.exports = router;
