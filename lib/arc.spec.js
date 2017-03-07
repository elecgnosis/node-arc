'use strict';

var _chai = require('chai');

var _arc = require('./arc');

var _arc2 = _interopRequireDefault(_arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Arc', function () {
  describe('#Arc()', function () {
    it('should return a new Arc object', function () {
      var testArc = new _arc2.default();
      _chai.assert.instanceOf(testArc, _arc2.default);
    });
    it('sets the originalWidth to the positive number supplied', function () {
      var testWidth = 10;
      var testArc = new _arc2.default(testWidth, null);
      _chai.assert.strictEqual(testArc.originalWidth, testWidth);
    });
    it('sets the originalHeight to the positive number supplied', function () {
      var testHeight = 10;
      var testArc = new _arc2.default(null, testHeight);
      _chai.assert.strictEqual(testArc.originalHeight, testHeight);
    });
    it('throws an error if the supplied width is not a number', function () {
      var testWidth = 'x';
      _chai.assert.throws(function () {
        new _arc2.default(testWidth, null);
      }, Error);
    });
    it('throws an error if the supplied height is not a number', function () {
      var testHeight = 'y';
      _chai.assert.throws(function () {
        new _arc2.default(null, testHeight);
      }, Error);
    });
    it('throws an error if the supplied width is less than zero', function () {
      var testWidth = -1;
      _chai.assert.throws(function () {
        new _arc2.default(testWidth, null);
      }, Error);
    });
    it('throws an error if the supplied height is less than zero', function () {
      var testHeight = -1;
      _chai.assert.throws(function () {
        new _arc2.default(null, testHeight);
      }, Error);
    });
  });
  describe('#validateInputNumber', function () {
    it('returns true if the value supplied is a number', function () {
      var testArc = new _arc2.default();
      var testValue = 0;
      _chai.assert.isTrue(testArc.validateInputNumber(testValue));
    });
    it('returns true if the value supplied is greater than or equal to 0', function () {
      var testArc = new _arc2.default();
      var testValue = 0;
      _chai.assert.isTrue(testArc.validateInputNumber(testValue));
    });
    it('returns false if the value supplied is not a number', function () {
      var testArc = new _arc2.default();
      var testValue = 'x';
      _chai.assert.isFalse(testArc.validateInputNumber(testValue));
    });
    it('returns false if the value supplied is less than zero', function () {
      var testArc = new _arc2.default();
      var testValue = -1;
      _chai.assert.isFalse(testArc.validateInputNumber(testValue));
    });
  });
  describe('#setOriginalWidth(originalWidth)', function () {
    it('sets the originalWidth to the positive number supplied', function () {
      var testArc = new _arc2.default();
      var testWidth = 10;
      testArc.setOriginalWidth(testWidth);
      _chai.assert.strictEqual(testArc.originalWidth, testWidth);
    });
    it('throws an error if the supplied width is not a number', function () {
      var testArc = new _arc2.default();
      var testWidth = 'x';
      _chai.assert.throws(function () {
        testArc.setOriginalWidth(testWidth);
      }, Error);
    });
    it('throws an error if the supplied height is not a number', function () {
      var testArc = new _arc2.default();
      var testHeight = 'y';
      _chai.assert.throws(function () {
        testArc.setOriginalWidth(testHeight);
      }, Error);
    });
  });
  describe('#setOriginalHeight(originalHeight)', function () {
    it('sets the originalHeight to the positive number supplied', function () {
      var testArc = new _arc2.default();
      var testHeight = 10;
      testArc.setOriginalHeight(testHeight);
      _chai.assert.strictEqual(testArc.originalHeight, testHeight);
    });
  });
  describe('#calculateAspectRatio', function () {
    it('returns the originalWidth divided by the originalHeight and limits the result to three decimal places', function () {
      var testArc = new _arc2.default(1920, 1080);
      var expectedRatio = 1.778;
      _chai.assert.strictEqual(testArc.calculateAspectRatio(), expectedRatio);
    });
    it('throws an error if originalWidth is not set', function () {});
  });
  describe('#calculateGreatestCommonDivisor', function () {
    it('returns the largest number that both the height and width can be divided by', function () {
      var testArc = new _arc2.default(1920, 1080);
      var expectedGCD = 120;
      var actualGCD = testArc.calculateGreatestCommonDivisor(testArc.originalWidth, testArc.originalHeight);
      _chai.assert.strictEqual(actualGCD, expectedGCD);
    });
  });
});