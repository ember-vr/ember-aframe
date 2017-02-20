import stringify from 'dummy/macros/stringify';
import compute from 'ember-macro-test-helpers/compute';
import { module, test } from 'qunit';

module('Unit | Macro | stringify');

// Replace this with your real tests.
test('it works', function(assert) {
  compute({
    assert,
    computed: stringify('key1', 'key2'),
    properties: {
      key1: 1,
      key2: 2
    },
    strictEqual: 3
  });
});
