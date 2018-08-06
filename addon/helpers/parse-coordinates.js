import { helper } from '@ember/component/helper';
import parseCoordinates from '../utils/parse-coordinates';

export default helper(params => {
  return parseCoordinates(...params);
});
