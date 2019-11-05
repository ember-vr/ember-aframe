import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    transition.send(false, 'updateSrc', this.get('updateSrc'));
  }
});
