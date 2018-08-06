import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    transition.send('updateSrc', this.get('updateSrc'));
  }
});
