import { helper } from '@ember/component/helper';
import _parseCoordinates from '../utils/parse-coordinates';

export default helper(function parseCoordinates(params) {
  return _parseCoordinates(...params);
});
