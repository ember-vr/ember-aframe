import toObject from 'ember-aframe/utils/to-object';
import { module, test } from 'qunit';
import EmberObject from '@ember/object';

module('Unit | Utility | to-object', function() {
  test('it works', function(assert) {
    let emberObject = EmberObject.create({ foo: 'bar' });

    let object = toObject(emberObject);

    assert.deepEqual(object, { foo: 'bar' });
    assert.notStrictEqual(object, emberObject);
    assert.ok(emberObject instanceof EmberObject);
    assert.notOk(object instanceof EmberObject);
  });
});
