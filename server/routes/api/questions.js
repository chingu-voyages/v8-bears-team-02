const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load input validation
const validateQuestionInput = require('../../validation/question');
const validateAnswerInput = require('../../validation/answer');

const Question = require('../../models/Question');
const Answer = require('../../models/Answer');

// /api/question routes

// @route GET api/question/:id/answer/create
// @desc  Create a new answer for a question
// @access Private
router.post(
    '/:id/answer/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // check validation
        const { errors, isValid } = validateAnswerInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Question.findById(req.params.id)
            .then(question => {
                const newAnswer = new Answer({
                    user: req.user.id,
                    content: req.body.content
                })
                    .save()
                    .then(answer => {
                        question.answers.push(answer);
                        question
                            .save()
                            .then(question => res.json(question))
                            .catch(err => err => console.log(err));
                    })
                    .catch(err => err => console.log(err));
            })
            .catch(err =>
                res.status(404).json({ noquestionfound: 'Question no found' })
            );
    }
);

// /api/questions routes

// @route POST api/questions/create
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

// @route GET api/questions
// @desc  Returns all questions
// @access Public
router.get('/', (req, res) => {
    Question.find({})
        .then(questions => res.json(questions))
        .catch(err =>
            res.status(404).json({ noquestionfound: 'Questions no found' })
        );
});

// @route GET api/questions/search
// @desc  Find all questions  by search query
// @access Public
router.post('/search', (req, res) => {
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

// @route GET api/questions/:id
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
