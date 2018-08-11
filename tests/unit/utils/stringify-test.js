import stringify from 'dummy/utils/stringify';
import { module, test } from 'qunit';

module('Unit | Utility | stringify', function() {
  test('it works', function(assert) {
    let result = stringify({
      dir: 'alternate',
      dur: undefined
    });

    assert.strictEqual(result, 'dir: alternate; dur: undefined');
  });
});
