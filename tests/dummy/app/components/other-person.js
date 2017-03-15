import AEntity from 'ember-a-frame/components/a-entity';
import stringifyComponent from 'ember-a-frame/macros/stringify-component';
import stringifyCoordinates from 'ember-a-frame/macros/stringify-coordinates';
import { readOnly } from 'ember-computed';

export default AEntity.extend({
  params: {
    rotX: 0,
    rotY: 0,
    posX: 0,
    posY: 0,
    posZ: 0
  },

  _rotX: readOnly('params.rotX'),
  _rotY: readOnly('params.rotY'),
  _posX: readOnly('params.posX'),
  _posY: readOnly('params.posY'),
  _posZ: readOnly('params.posZ'),

  objModel: stringifyComponent('obj-model', {
    obj: 'obj',
    mtl: 'mtl'
  }),

  rotation: stringifyCoordinates({
    x: '_rotX',
    y: '_rotY',
    z: 0
  }),

  position: stringifyCoordinates({
    x: '_posX',
    y: '_posY',
    z: '_posZ'
  }),

  modelRotation: stringifyCoordinates({
    x: 0,
    y: 181,
    z: 0
  }),

  modelPosition: stringifyCoordinates({
    x: -0.25,
    y: -0.75,
    z: 0.75
  })
});
