'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arc = function () {
  function Arc(width, height) {
    _classCallCheck(this, Arc);

    if (width) {
      if (this.validateInputNumber(width)) {
        this.originalWidth = width;
      } else {
        throw new Error('Input values are not required, but if supplied, they must be positive numbers. Width supplied: ' + width);
      }
    }
    if (height) {
      if (this.validateInputNumber(height)) {
        this.originalHeight = height;
      } else {
        throw new Error('Input values are not required, but if supplied, they must be positive numbers. Height supplied: ' + height);
      }
    }
  }

  _createClass(Arc, [{
    key: 'validateInputNumber',
    value: function validateInputNumber(value) {
      return typeof value === 'number' && value >= 0;
    }
  }, {
    key: 'setOriginalWidth',
    value: function setOriginalWidth(width) {
      if (this.validateInputNumber(width)) {
        this.originalWidth = width;
      } else {
        throw new Error('Input values must be positive numbers. Width supplied: ' + width);
      }
    }
  }, {
    key: 'setOriginalHeight',
    value: function setOriginalHeight(height) {
      if (this.validateInputNumber(height)) {
        this.originalHeight = height;
      } else {
        throw new Error('Input value must be positive numbers. Height supplied: ' + height);
      }
    }
  }, {
    key: 'calculateAspectRatio',
    value: function calculateAspectRatio() {
      return parseFloat((this.originalWidth / this.originalHeight).toFixed(3));
    }
  }, {
    key: 'calculateNewHeight',
    value: function calculateNewHeight(newWidth) {
      return this.calculateAspectRatio() * newWidth;
    }
  }, {
    key: 'calculateNewWidth',
    value: function calculateNewWidth(newHeight) {
      return this.calculateAspectRatio() * newHeight;
    }
  }, {
    key: 'getAspectRatioText',
    value: function getAspectRatioText() {
      return;
    }
  }, {
    key: 'calculateGreatestCommonDivisor',
    value: function calculateGreatestCommonDivisor(x, y) {
      if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Must supply number parameters, x: ' + x + ', y: ' + y);
      }
      if (x < 0 || y < 0) {
        throw new Error('Numbers supplied must be positive, x: ' + x + ', y: ' + y);
      }
      if (y === 0) {
        return x;
      }
      return this.calculateGreatestCommonDivisor(y, x % y);
    }
  }]);

  return Arc;
}();

exports.default = Arc;