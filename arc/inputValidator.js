export default class InputValidator {
  validateInputNumber(value) {
    if (typeof value === 'undefined') {
      throw new TypeError('No input value supplied');
    }
    if (typeof value !== 'number') {
      throw new TypeError('Input value not a number');
    }
    if (value < 0) {
      throw new RangeError('Input value not positive');
    }
    if (value === 0) {
      throw new RangeError('Input value not nonzero');
    }
    return true;
  }
}

module.exports = InputValidator;
