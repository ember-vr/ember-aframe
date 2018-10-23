import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | parse-coordinates', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#with (parse-coordinates "1.2 3.4 5.6") as |c|}}
        {{c.x}} {{c.y}} {{c.z}}
      {{/with}}
    `);

    assert.dom(this.element).hasText('1.2 3.4 5.6');
  });
});
