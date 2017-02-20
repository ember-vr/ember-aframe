import { helper } from 'ember-helper';
import stringifyCoordinates from '../utils/stringify-coordinates';

export default helper((params, hash) => {
  return stringifyCoordinates(hash);
});
