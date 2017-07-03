import { helper } from 'ember-helper';
import stringifyCoordinates from '../utils/stringify-coordinates';

export default helper(params => {
  return stringifyCoordinates(...params);
});
