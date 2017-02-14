import Ember from 'ember';
import layout from '../templates/components/a-cylinder';

export default Ember.Component.extend({
  layout,

  tagName: 'a-cylinder',
  attributeBindings: [
    'position',
    'radius',
    'height',
    'color'
  ]
});
