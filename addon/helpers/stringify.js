import { helper } from 'ember-helper';
import stringify from 'ember-a-frame/utils/stringify';

export default helper((params, hash) => {
  return stringify(hash);
});
