const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword)
        ? data.confirmPassword
        : '';

    if (!validator.isLength(data.username, { min: 1, max: 25 })) {
        errors.username = 'Username must be between 1 and 25 characters';
    }

    if (validator.isEmpty(data.username)) {
        errors.username = 'Username field is required';
    }

    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = 'Password must be between 8 and 30 characters';
    }

    if (validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm password field is required';
    }

    if (!validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
