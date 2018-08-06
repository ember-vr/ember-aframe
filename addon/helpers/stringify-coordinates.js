import { helper } from '@ember/component/helper';
import stringifyCoordinates from '../utils/stringify-coordinates';

export default helper(params => {
  return stringifyCoordinates(...params);
});
