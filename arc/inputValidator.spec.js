import { assert } from 'chai';
import { spy, createStubInstance } from 'sinon';
import InputValidator from './inputValidator.js';

describe('InputValidator', function () {
  let testIV;
  beforeEach(function () {
    testIV = new InputValidator();
  });
  describe('#InputValidator()', function () {
    it('returns an InputValidator object', function () {
      assert.instanceOf(testIV, InputValidator);
    });
  });
  describe('#validateInputNumber()', function () {
    it('throws a TypeError if no value is supplied', function () {
      assert.throws(function () {
        testIV.validateInputNumber();
      }, 'No input value supplied');
    });
    it('throws a TypeError if the supplied value is not a number', function () {
      const testValue = '';
      assert.throws(function () {
        testIV.validateInputNumber(testValue);
      }, 'Input value not a number');
    });
    it('throws a RangeError if the supplied value is not positive', function () {
      const testValue = -1;
      assert.throws(function () {
        testIV.validateInputNumber(testValue);
      }, RangeError);
    });
    it('throws a RangeError if the supplied value is not nonzero', function () {
      const testValue = 0;
      assert.throws(function () {
        testIV.validateInputNumber(testValue);
      }, RangeError);
    });
    it('returns true if the supplied value is a positive, nonzero number', function () {
      const testValue = 1;
      const result = testIV.validateInputNumber(testValue);
      assert.isTrue(result);
    });
  });
});
