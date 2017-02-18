import AEntity from './a-entity';

export default AEntity.extend({
  tagName: 'a-sphere',
  attributeBindings: [
    'radius',
    'color'
  ]
});
