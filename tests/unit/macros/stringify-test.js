import stringify from 'ember-aframe/macros/stringify';
import { module, test } from 'qunit';
import { compute } from 'ember-macro-test-helpers';

module('Unit | Macro | stringify', function() {
  test('it works', function(assert) {
    compute({
      assert,
      computed: stringify({
        dir: 'dir',
        dur: 'dur'
      }),
      properties: {
        dir: 'alternate'
      },
      strictEqual: 'dir: alternate; dur: undefined'
    });
  });
});
