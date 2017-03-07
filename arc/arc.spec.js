import { assert } from 'chai';
import Arc from './arc';

describe('Arc', function () {
  describe('#Arc()', function () {
    it('should return a new Arc object', function () {
      const testArc = new Arc();
      assert.instanceOf(testArc, Arc);
    });
    it('sets the originalWidth to 0 if none is supplied', function () {
      const testArc = new Arc();
      assert.strictEqual(testArc.originalWidth, 0);
    });
    it('sets the originalHeight to 0 if none is supplied', function () {
      const testArc = new Arc();
      assert.strictEqual(testArc.originalHeight, 0);
    });
    it('sets the originalWidth to the value supplied', function() {
      const testWidth = 10;
      const testArc = new Arc(testWidth, null);
      assert.strictEqual(testArc.originalWidth, testWidth);
    });
    it('sets the originalHeight to the value supplied', function() {
      const testHeight = 10;
      const testArc = new Arc(null, testHeight);
      assert.strictEqual(testArc.originalHeight, testHeight);
    });
    it('sets the originalWidth to 0 if the value supplied is not a number', function () {
      const badWidth = '';
      const testArc = new Arc(badWidth, null);
      assert.strictEqual(testArc.originalWidth, 0);
    });
    it('sets the originalHeight to 0 if the value supplied is not a number', function () {
      const badHeight = '';
      const testArc = new Arc(null, badHeight);
      assert.strictEqual(testArc.originalHeight, 0);
    });
  });
  describe('#setOriginalWidth(originalWidth)', function () {
    it('sets the originalWidth to the given value', function () {
      const testArc = new Arc();
      const testWidth = 10;
      testArc.setOriginalWidth(testWidth);
      assert.strictEqual(testArc.originalWidth, testWidth);
    });
  });
  describe('#setOriginalHeight(originalHeight)', function () {
    it('sets the originalHeight to the given value', function () {
      const testArc = new Arc();
      const testHeight = 10;
      testArc.setOriginalHeight(testHeight);
      assert.strictEqual(testArc.originalHeight, testHeight);
    });
  });
  describe('#calculateAspectRatio', function () {
    it('divides the originalWidth by the originalHeight and limits the result to three decimal places', function () {
      const testArc = new Arc(1920, 1080);
      const expectedRatio = 1.778;
      assert.strictEqual(testArc.calculateAspectRatio(), expectedRatio);
    });
  });
  describe('#calculateGreatestCommonDivisor', function () {
    it('returns the largest number that both the height and width can be divided by', function () {
      const testArc = new Arc(1920, 1080);
      const expectedGCD = 120;
      const actualGCD = testArc.calculateGreatestCommonDivisor();
      assert.strictEqual(actualGCD, expectedGCD);
    });
  });
});
