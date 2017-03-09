import { assert } from 'chai';
import Ui from './ui';

describe('Ui', function () {
  describe('#Ui()', function () {
    it('returns a Ui object', function () {
      const testUi = new Ui();
      assert.instanceOf(testUi, Ui);
    });
  });
});
