import computed from 'ember-macro-helpers/computed';
import hash from 'ember-awesome-macros/hash';
import stringifyComponent from '../utils/stringify-component';

export default function(component, key) {
  return computed(hash(key), hash => stringifyComponent(component, hash)).readOnly();
}
