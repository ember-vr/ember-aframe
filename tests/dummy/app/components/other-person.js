import AEntity from 'ember-aframe/components/a-entity';
import stringifyComponent from 'ember-aframe/macros/stringify-component';
import stringifyCoordinates from 'ember-aframe/macros/stringify-coordinates';
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

  rotation: stringifyCoordinates('_rotX', '_rotY', 0),
  position: stringifyCoordinates('_posX', '_posY', '_posZ'),

  modelRotation: stringifyCoordinates(0, 181, 0),
  modelPosition: stringifyCoordinates(-0.25, -0.75, 0.75)
});
