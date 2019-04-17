const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateQuestionInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.content = !isEmpty(data.content) ? data.content : '';

    if (validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (!validator.isLength(data.title, { min: 8, max: 200 })) {
        errors.title = 'Title must be at least 8 characters long';
    }

    if (validator.isEmpty(data.content)) {
        errors.content = 'Content field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
