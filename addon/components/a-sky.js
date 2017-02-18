import AEntity from './a-entity';

export default AEntity.extend({
  tagName: 'a-sky',
  attributeBindings: [
    'color',
    'radius',
    'src'
  ]
});
