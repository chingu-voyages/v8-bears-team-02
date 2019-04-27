const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateAnswerInput(data) {
    let errors = {};

    data.content = !isEmpty(data.content) ? data.content : '';

    if (validator.isEmpty(data.content)) {
        errors.content = 'Content field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
