import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggle(isExpanded) {
      this.get('toggle')(!isExpanded);
    }
  }
});
