import stringifyComponent from 'ember-aframe/macros/stringify-component';
import { module, test } from 'qunit';
import { compute } from 'ember-macro-helpers/test-support';

module('Unit | Macro | stringify component', function() {
  test('it works', function(assert) {
    compute({
      assert,
      computed: stringifyComponent('animation', {
        dir: 'dir',
        dur: 'dur'
      }),
      properties: {
        dir: 'alternate'
      },
      strictEqual: 'dir:alternate;dur:undefined'
    });
  });
});
