import Controller from 'ember-controller';

export default Controller.extend({
  actions: {
    toggle(component) {
      component.toggleProperty('isExpanded');
    }
  }
});
