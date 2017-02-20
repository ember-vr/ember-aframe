import stringifyCoordinates from 'dummy/macros/stringify-coordinates';
import compute from 'ember-macro-test-helpers/compute';
import { module, test } from 'qunit';

module('Unit | Macro | stringify coordinates');

// Replace this with your real tests.
test('it works', function(assert) {
  compute({
    assert,
    computed: stringifyCoordinates('key1', 'key2'),
    properties: {
      key1: 1,
      key2: 2
    },
    strictEqual: 3
  });
});
