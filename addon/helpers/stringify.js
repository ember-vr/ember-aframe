import { helper } from 'ember-helper';
import stringify from 'ember-aframe/utils/stringify';

export default helper((params, hash) => {
  return stringify(hash);
});
