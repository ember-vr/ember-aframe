import { helper } from 'ember-helper';
import parseCoordinates from '../utils/parse-coordinates';

export default helper(params => {
  return parseCoordinates(...params);
});
