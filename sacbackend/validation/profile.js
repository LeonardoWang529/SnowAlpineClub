//This part is the validator for compelete personal information
const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};
  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';

  // Name checks
  if (Validator.isEmpty(data.username)) {
    errors.username = 'Name field is required';
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
