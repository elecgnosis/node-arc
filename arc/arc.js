export default class Arc {
  constructor() {
    this.originalWidth = 0;
    this.originalHeight = 0;
  }
  setOriginalWidth(originalWidth) {
    this.originalWidth = originalWidth;
  }
  setOriginalHeight(originalHeight) {
    this.originalHeight = originalHeight;
  }
  calculateNewHeight(newWidth) {
    return this.calculateAspectRatio() * newWidth;
  }
  calculateNewWidth(newHeight) {
    return this.calculateAspectRatio() * newHeight;
  }
  calculateAspectRatio() {
    return (this.originalHeight / this.originalWidth);
  }
}
