import Ember from 'ember';
import layout from '../templates/components/a-plane';

export default Ember.Component.extend({
  layout,

  tagName: 'a-plane',
  attributeBindings: [
    'position',
    'rotation',
    'width',
    'height',
    'color'
  ]
});
