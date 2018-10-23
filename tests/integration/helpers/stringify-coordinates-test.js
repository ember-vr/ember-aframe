import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | stringify-coordinates', function(hooks) {
  setupRenderingTest(hooks);

  test('it handles params', async function(assert) {
    await render(hbs`{{stringify-coordinates "1.2" "3.4" "5.6"}}`);

    assert.dom(this.element).hasText('1.2 3.4 5.6');
  });

  test('it handles object', async function(assert) {
    await render(hbs`
      {{stringify-coordinates (hash
        x="1.2"
        y="3.4"
        z="5.6"
      )}}
    `);

    assert.dom(this.element).hasText('1.2 3.4 5.6');
  });
});
