import { assert } from 'chai';
import Arc from './arc';

describe('Arc', function () {
  describe('#Arc()', function () {
    it('should return a new Arc object', function () {
      const testArc = new Arc();
      assert.typeOf(testArc, 'Arc');
    });
  });
});
