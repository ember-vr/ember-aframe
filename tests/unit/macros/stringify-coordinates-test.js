import stringifyCoordinates from 'ember-aframe/macros/stringify-coordinates';
import { module, test } from 'qunit';
import { compute } from 'ember-macro-helpers/test-support';

module('Unit | Macro | stringify coordinates', function() {
  test('it handles params', function(assert) {
    compute({
      assert,
      computed: stringifyCoordinates('x', 'y', 'z'),
      properties: {
        x: 1.2,
        y: 3.4,
        z: 5.6
      },
      strictEqual: '1.2 3.4 5.6'
    });
  });

  test('it handles object', function(assert) {
    compute({
      assert,
      computed: stringifyCoordinates({
        x: 'x',
        y: 'y',
        z: 'z'
      }),
      properties: {
        x: 1.2,
        y: 3.4,
        z: 5.6
      },
      strictEqual: '1.2 3.4 5.6'
    });
  });
});
