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
    it('sets the Arc.inputValidator property', function () {
      const testArc = new Arc();
      assert.isDefined(testArc.inputValidator);
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
    it('calls #validateInputNumber() using the supplied width', function () {
      const testWidth = 1;
      const mockIV = mock(InputValidator.default);
      const mockIVExpectation = mockIV.expects('validateInputNumber').withArgs(testWidth);

      const testArc = new Arc();

      assert.isTrue(mockIV.verify());
    });
    it('calls #validateInputNumber() using the supplied height', function () {
      const testHeight = 1;
      const spyIV = spy(InputValidator, 'validateInputNumber');
      testArc = new Arc();

      assert.isTrue(spyIV.called);
    });
  });
  describe('#setOriginalWidth(originalWidth)', function () {
    it('calls the inputValidator with the value supplied', function () {
      const testWidth = 1;
      const testArc = new Arc();
      const spyIV = spy(testArc.inputValidator, 'validateInputNumber');
      testArc.setOriginalWidth(testWidth);

      assert.isTrue(spyIV.calledWith(testWidth));
    });
    it('sets the value supplied if it passes validation', function () {
      const testWidth = 1;
      const testArc = new Arc();
      const stubIV = spy(testArc.inputValidator, 'validateInputNumber').returns(true);
      testArc.setOriginalWidth(testWidth);

      assert.strictEqual(spyIV.originalHeight, testWidth);
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
