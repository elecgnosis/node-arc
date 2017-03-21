import { assert } from 'chai';
import { spy, stub, mock, createStubInstance } from 'sinon';
import Arc from './arc';
import * as InputValidator from './inputValidator.js';

describe('Arc', function () {
  describe('#Arc()', function () {
    it('returns a new Arc object', function () {
      const testArc = new Arc();
      assert.instanceOf(testArc, Arc);
    });
    it('sets the inputValidator property', function () {
      const testArc = new Arc();
      assert.isDefined(testArc.inputValidator);
    });
    it('declares the originalWidth property', function () {
      const testArc = new Arc();
      assert.isUndefined(testArc.originalWidth);
    });
    it('declares the originalHeight property', function () {
      const testArc = new Arc();
      assert.isUndefined(testArc.originalHeight);
    });
    it('sets the originalWidth to the positive number supplied', function() {
      const testWidth = 1;
      const testArc = new Arc(testWidth, null);
      assert.strictEqual(testArc.originalWidth, testWidth);
    });
    it('sets the originalHeight to the positive number supplied', function() {
      const testHeight = 1;
      const testArc = new Arc(null, testHeight);
      assert.strictEqual(testArc.originalHeight, testHeight);
    });
    it('returns a new Arc object if width but no height is supplied', function () {
      const testWidth = 1;
      const testArc = new Arc(testWidth, null);
      assert.instanceOf(testArc, Arc);
    });
    it('returns a new Arc object if height but no width is supplied', function () {
      const testHeight = 1;
      const testArc = new Arc(null, testHeight);
      assert.instanceOf(testArc, Arc);
    });
    it('returns a new Arc object if neither width nor height are supplied', function () {
        const testArc = new Arc();
        assert.instanceOf(testArc, Arc);
    });
  });
  describe('#setOriginalWidth(originalWidth)', function () {
    it('returns false if no value is supplied', function () {
      const testArc = new Arc();
      const result = testArc.setOriginalWidth();
    });
    it('calls the inputValidator with the value supplied', function () {
      const testWidth = 1;
      const testArc = new Arc();
      const spyIV = spy(testArc.inputValidator, 'validateInputNumber');
      testArc.setOriginalWidth(testWidth);

      assert.isTrue(spyIV.calledWith(testWidth));
    });
    it('sets the originalWidth to the value supplied if it passes validation', function () {
      const testWidth = 1;
      const testArc = new Arc();
      const stubIV = stub(testArc.inputValidator, 'validateInputNumber').returns(true);
      testArc.setOriginalWidth(testWidth);

      assert.strictEqual(testArc.originalWidth, testWidth);
    });
    it('returns true if the value supplied is used to set the originalWidth', function () {
      const testWidth = 1;
      const testArc = new Arc();
      const stubIV = stub(testArc.inputValidator, 'validateInputNumber').returns(true);
      const result = testArc.setOriginalWidth(testWidth);

      assert.isTrue(result);
    });
  });
  describe('#setOriginalHeight(originalHeight)', function () {
    it('returns false if no value is supplied', function () {
      const testArc = new Arc();
      const result = testArc.setOriginalHeight();
    });
    it('calls the inputValidator with the value supplied', function () {
      const testHeight = 1;
      const testArc = new Arc();
      const spyIV = spy(testArc.inputValidator, 'validateInputNumber');
      testArc.setOriginalHeight(testHeight);

      assert.isTrue(spyIV.calledWith(testHeight));
    });
    it('sets the originalHeight to the value supplied if it passes validation', function () {
      const testHeight = 1;
      const testArc = new Arc();
      const stubIV = stub(testArc.inputValidator, 'validateInputNumber').returns(true);
      testArc.setOriginalHeight(testHeight);

      assert.strictEqual(testArc.originalHeight, testHeight);
    });
    it('returns true if the value supplied is used to set the originalWidth', function () {
      const testHeight = 1;
      const testArc = new Arc();
      const stubIV = stub(testArc.inputValidator, 'validateInputNumber').returns(true);
      const result = testArc.setOriginalHeight(testHeight);

      assert.isTrue(result);
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
