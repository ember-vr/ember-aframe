import parseCoordinates from 'ember-aframe/utils/parse-coordinates';
import { module, test } from 'qunit';

module('Unit | Utility | parse-coordinates', function() {
  test('it works', function(assert) {
    let result = parseCoordinates('1.2 3.4 5.6');

    assert.deepEqual(result, {
      x: 1.2,
      y: 3.4,
      z: 5.6
    });
  });
});
