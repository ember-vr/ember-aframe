import toAStr from 'dummy/macros/to-a-str';
import compute from 'ember-macro-test-helpers/compute';
import { module, test } from 'qunit';

module('Unit | Macro | to a str');

// Replace this with your real tests.
test('it works', function(assert) {
  compute({
    assert,
    computed: toAStr('key1', 'key2'),
    properties: {
      key1: 1,
      key2: 2
    },
    strictEqual: 3
  });
});
