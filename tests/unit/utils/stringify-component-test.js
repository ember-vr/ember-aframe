import stringifyComponent from 'ember-aframe/utils/stringify-component';
import { module, test } from 'qunit';

module('Unit | Utility | stringify-component', function() {
  test('it works', function(assert) {
    let result = stringifyComponent('animation', {
      dir: 'alternate',
      dur: undefined
    });

    assert.strictEqual(result, 'dir:alternate;dur:undefined');
  });
});
