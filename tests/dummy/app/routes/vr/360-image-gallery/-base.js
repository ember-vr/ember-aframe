import Route from 'ember-route';

export default Route.extend({
  beforeModel(transition) {
    transition.send('updateSrc', this.get('updateSrc'));
  }
});
