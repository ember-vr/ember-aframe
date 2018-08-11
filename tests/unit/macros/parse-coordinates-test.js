import parseCoordinates from 'ember-aframe/macros/parse-coordinates';
import { module, test } from 'qunit';
import { compute } from 'ember-macro-test-helpers';

module('Unit | Macro | parse coordinates', function() {
  test('it works', function(assert) {
    compute({
      assert,
      computed: parseCoordinates('coordinates'),
      properties: {
        coordinates: '1.2 3.4 5.6'
      },
      deepEqual: {
        x: 1.2,
        y: 3.4,
        z: 5.6
      }
    });
  });
});
