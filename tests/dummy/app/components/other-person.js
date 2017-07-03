import AEntity from 'ember-aframe/components/a-entity';
import stringifyComponent from 'ember-aframe/macros/stringify-component';
import stringifyCoordinates from 'ember-aframe/macros/stringify-coordinates';
import { readOnly } from 'ember-computed';

export default AEntity.extend({
  params: {
    _rx: 0,
    _ry: 0,
    _px: 0,
    _py: 0,
    _pz: 0
  },

  _rx: readOnly('params._rx'),
  _ry: readOnly('params._ry'),
  _px: readOnly('params._px'),
  _py: readOnly('params._py'),
  _pz: readOnly('params._pz'),

  objModel: stringifyComponent('obj-model', {
    obj: 'obj',
    mtl: 'mtl'
  }),

  rotation: stringifyCoordinates('_rx', '_ry', 0),
  position: stringifyCoordinates('_px', '_py', '_pz'),

  modelRotation: stringifyCoordinates(0, 181, 0),
  modelPosition: stringifyCoordinates(-0.25, -0.75, 0.75)
});
