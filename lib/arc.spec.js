'use strict';

var _chai = require('chai');

var _arc = require('./arc');

var _arc2 = _interopRequireDefault(_arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Arc', function () {
  describe('#Arc()', function () {
    it('should return a new Arc object', function () {
      _chai.assert.typeOf(1, 'number');
      var testArc = new _arc2.default();
      console.log(toString.call(testArc));
      _chai.assert.typeOf(testArc, 'Arc');
    });
  });
});