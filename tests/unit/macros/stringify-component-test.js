import stringifyComponent from 'dummy/macros/stringify-component';
import compute from 'ember-macro-test-helpers/compute';
import { module, test } from 'qunit';

module('Unit | Macro | stringify component');

// Replace this with your real tests.
test('it works', function(assert) {
  compute({
    assert,
    computed: stringifyComponent('key1', 'key2'),
    properties: {
      key1: 1,
      key2: 2
    },
    strictEqual: 3
  });
});
