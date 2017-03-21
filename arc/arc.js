import InputValidator from './inputValidator.js';

export default class Arc {
  constructor(width, height) {
    this.inputValidator = new InputValidator();
    this.originalWidth;
    this.originalHeight;

    this.setOriginalWidth(width);
    this.setOriginalHeight(height);
  }

  setOriginalWidth(width) {
    if (width) {
      if (this.inputValidator.validateInputNumber(width)) {
        this.originalWidth = width;
        return true;
      }
    }
    return false;
  }
  setOriginalHeight(height) {
    if (height) {
      if (this.inputValidator.validateInputNumber(height)) {
        this.originalHeight = height;
        return true;
      }
    }
    return false;
  }
  calculateAspectRatio() {
    return parseFloat((this.originalWidth / this.originalHeight).toFixed(3));
  }
  calculateNewHeight(newWidth) {
    return this.calculateAspectRatio() * newWidth;
  }
  calculateNewWidth(newHeight) {
    return this.calculateAspectRatio() * newHeight;
  }
  getAspectRatioDimensions() {
    const gcd = this.calculateGreatestCommonDivisor(this.originalWidth, this.originalHeight);
    return {
      width: this.originalWidth / gcd,
      height: this.originalHeight / gcd,
    };
  }
  calculateGreatestCommonDivisor(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error(`Must supply number parameters, x: ${x}, y: ${y}`);
    }
    if (x < 0 || y < 0) {
      throw new Error(`Numbers supplied must be positive, x: ${x}, y: ${y}`);
    }
    if (y === 0) {
      return x;
    }
    return this.calculateGreatestCommonDivisor(y, x % y);
  }
}

module.exports = Arc;
