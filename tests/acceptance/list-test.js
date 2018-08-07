import { click, findAll, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import testSelector from 'ember-test-selectors';

module('Acceptance | list', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list', async function(assert) {
    await visit('/list');

    await click(testSelector('default-attributes-header') + ' '
      + testSelector('pointer'));

    await click(testSelector('default-components-header') + ' '
      + testSelector('pointer'));

    await click(testSelector('primitive-list-header') + ' '
      + testSelector('pointer'));

    assert.ok(findAll(testSelector('default-attribute')).length, 'there are default attributes');
    assert.ok(findAll(testSelector('default-component')).length, 'there are default components');
    assert.ok(findAll(testSelector('primitive')).length, 'there are primitives');
  });
});
