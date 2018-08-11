import { helper } from '@ember/component/helper';
import _stringify from 'ember-aframe/utils/stringify';

export default helper(function stringify(params, hash) {
  return _stringify(hash);
});
