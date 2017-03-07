export default class Arc {
  constructor(width, height) {
    if (width) {
      if (this.validateInputNumber(width)) {
        this.originalWidth = width;
      } else {
        throw new Error(`Input values are not required, but if supplied, they must be positive numbers. Width supplied: ${width}`);
      }
    }
    if (height) {
      if (this.validateInputNumber(height)) {
        this.originalHeight = height;
      } else {
        throw new Error(`Input values are not required, but if supplied, they must be positive numbers. Height supplied: ${height}`);
      }
    }
  }
  // TODO: Use for all value validation and throw errors from here
  // constructor, setters, calculateGreatestCommonDivisor
  validateInputNumber(value) {
    return typeof value === 'number' && value >= 0;
  }
  setOriginalWidth(width) {
    if (this.validateInputNumber(width)) {
      this.originalWidth = width;
    } else {
      throw new Error(`Input values must be positive numbers. Width supplied: ${width}`);
    }
  }
  setOriginalHeight(height) {
    if (this.validateInputNumber(height)) {
      this.originalHeight = height;
    } else {
      throw new Error(`Input value must be positive numbers. Height supplied: ${height}`);
    }
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
  getAspectRatioText() {
    return ;
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
