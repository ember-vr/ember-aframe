import { click, findAll, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list', async function(assert) {
    await visit('/list');

    await click('[data-test-default-attributes-header] [data-test-pointer]');

    await click('[data-test-default-components-header] [data-test-pointer]');

    await click('[data-test-primitive-list-header] [data-test-pointer]');

    assert.ok(findAll('[data-test-default-attribute]').length, 'there are default attributes');
    assert.ok(findAll('[data-test-default-component]').length, 'there are default components');
    assert.ok(findAll('[data-test-primitive]').length, 'there are primitives');
  });
});
