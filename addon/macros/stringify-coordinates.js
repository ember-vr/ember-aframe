import computed from 'ember-macro-helpers/computed';
import stringifyCoordinates from '../utils/stringify-coordinates';

export default function(...coordinates) {
  return computed(...coordinates, stringifyCoordinates).readOnly();
}
