import Ember from 'ember';
import layout from '../templates/components/a-sky';

export default Ember.Component.extend({
  layout,

  tagName: 'a-sky',
  attributeBindings: [
    'color',
    'radius',
    'src'
  ]
});
