import AEntity from './a-entity';

export default AEntity.extend({
  tagName: 'a-plane',
  attributeBindings: [
    'width',
    'height',
    'color'
  ]
});
