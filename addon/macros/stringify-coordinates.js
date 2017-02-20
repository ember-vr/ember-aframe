import computed from 'ember-macro-helpers/computed';
import hash from 'ember-awesome-macros/hash';
import stringifyCoordinates from '../utils/stringify-coordinates';

export default function(key) {
  return computed(hash(key), stringifyCoordinates).readOnly();
}
