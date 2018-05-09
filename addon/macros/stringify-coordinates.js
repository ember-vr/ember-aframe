import { computed } from 'ember-macro-helpers';
import stringifyCoordinates from '../utils/stringify-coordinates';

export default function(...coordinates) {
  return computed(...coordinates, stringifyCoordinates);
}
