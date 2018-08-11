import stringifyCoordinates from 'ember-aframe/utils/stringify-coordinates';
import { module, test } from 'qunit';

module('Unit | Utility | stringify-coordinates', function() {
  test('it handles params', function(assert) {
    let result = stringifyCoordinates(1.2, 3.4, 5.6);

    assert.strictEqual(result, '1.2 3.4 5.6');
  });

  test('it handles object', function(assert) {
    let result = stringifyCoordinates({
      x: 1.2,
      y: 3.4,
      z: 5.6
    });

    assert.strictEqual(result, '1.2 3.4 5.6');
  });
});
