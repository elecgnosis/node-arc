export default class Arc {
  constructor(width, height) {
    this.originalWidth = typeof width === 'number' ? width : 0;
    this.originalHeight = typeof height === 'number' ? height : 0;
  }
  setOriginalWidth(originalWidth) {
    this.originalWidth = originalWidth;
  }
  setOriginalHeight(originalHeight) {
    this.originalHeight = originalHeight;
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
      throw new Error('Must supply number parameters', x, y);
    }
    if (y === 0) {
      return x;
    }
    return this.calculateGreatestCommonDivisor(y, x % y);
  }
}
