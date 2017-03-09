import Component from 'ember-component';
import { defaultComponents } from 'ember-a-frame/utils/components';

export default Component.extend({
  defaultComponents,

  actions: {
    toggle() {
      this.toggleProperty('isExpanded');
    }
  }
});
