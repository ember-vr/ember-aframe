import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitFor } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | a-entity-loaded-test', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function() {
    await render(hbs`{{a-entity-loaded-test}}`);

    await waitFor('#loaded');
  });
});
