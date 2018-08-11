import { helper } from '@ember/component/helper';
import _stringifyCoordinates from '../utils/stringify-coordinates';

export default helper(function stringifyCoordinates(params) {
  return _stringifyCoordinates(...params);
});
