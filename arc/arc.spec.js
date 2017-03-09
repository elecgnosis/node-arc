import { assert } from 'chai';
import Arc from './arc';

describe('Arc', function () {
  describe('#Arc()', function () {
    it('returns a new Arc object', function () {
      const testArc = new Arc();
      assert.instanceOf(testArc, Arc);
    });
    it('sets the originalWidth to the positive number supplied', function() {
      const testWidth = 10;
      const testArc = new Arc(testWidth, null);
      assert.strictEqual(testArc.originalWidth, testWidth);
    });
    it('sets the originalHeight to the positive number supplied', function() {
      const testHeight = 10;
      const testArc = new Arc(null, testHeight);
      assert.strictEqual(testArc.originalHeight, testHeight);
    });
    it('throws an error if the supplied width is not a number', function () {
      const testWidth = 'x';
      assert.throws(function () {
        new Arc(testWidth, null);
      }, Error);
    });
    it('throws an error if the supplied height is not a number', function () {
      const testHeight = 'y';
      assert.throws(function () {
        new Arc(null, testHeight);
      }, Error);
    });
    it('throws an error if the supplied width is less than zero', function () {
      const testWidth = -1;
      assert.throws(function () {
        new Arc(testWidth, null);
      }, Error);
    });
    it('throws an error if the supplied height is less than zero', function () {
      const testHeight = -1;
      assert.throws(function () {
        new Arc(null, testHeight);
      }, Error);
    });
  });
  describe('#validateInputNumber', function () {
    it('returns true if the value supplied is a number', function () {
      const testArc = new Arc();
      const testValue = 0;
      assert.isTrue(testArc.validateInputNumber(testValue));
    });
    it('returns true if the value supplied is greater than or equal to 0', function () {
      const testArc = new Arc();
      const testValue = 0;
      assert.isTrue(testArc.validateInputNumber(testValue));
    });
    it('returns false if the value supplied is not a number', function () {
      const testArc = new Arc();
      const testValue = 'x';
      assert.isFalse(testArc.validateInputNumber(testValue));
    });
    it('returns false if the value supplied is less than zero', function () {
      const testArc = new Arc();
      const testValue = -1;
      assert.isFalse(testArc.validateInputNumber(testValue));
    });
  });
  describe('#setOriginalWidth(originalWidth)', function () {
    it('sets the originalWidth to the positive number supplied', function () {
      const testArc = new Arc();
      const testWidth = 10;
      testArc.setOriginalWidth(testWidth);
      assert.strictEqual(testArc.originalWidth, testWidth);
    });
    it('throws an error if the supplied width is not a number', function () {
      const testArc = new Arc();
      const testWidth = 'x';
      assert.throws(function () {
        testArc.setOriginalWidth(testWidth);
      }, Error);
    });
    it('throws an error if the supplied height is not a number', function () {
      const testArc = new Arc();
      const testHeight = 'y';
      assert.throws(function () {
        testArc.setOriginalWidth(testHeight);
      }, Error);
    });
  });
  describe('#setOriginalHeight(originalHeight)', function () {
    it('sets the originalHeight to the positive number supplied', function () {
      const testArc = new Arc();
      const testHeight = 10;
      testArc.setOriginalHeight(testHeight);
      assert.strictEqual(testArc.originalHeight, testHeight);
    });
  });
  describe('#calculateAspectRatio', function () {
    it('returns the originalWidth divided by the originalHeight and limits the result to three decimal places', function () {
      const testArc = new Arc(1920, 1080);
      const expectedRatio = 1.778;
      assert.strictEqual(testArc.calculateAspectRatio(), expectedRatio);
    });
    it('throws an error if originalWidth is not set', function () {

    });
  });
  describe('#calculateGreatestCommonDivisor', function () {
    it('returns the largest number that both the height and width can be divided by', function () {
      const testArc = new Arc(1920, 1080);
      const expectedGCD = 120;
      const actualGCD = testArc.calculateGreatestCommonDivisor(testArc.originalWidth, testArc.originalHeight);
      assert.strictEqual(actualGCD, expectedGCD);
    });
  });
});
