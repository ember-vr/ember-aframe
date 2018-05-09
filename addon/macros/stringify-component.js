import { computed } from 'ember-macro-helpers';
import { hash } from 'ember-awesome-macros';
import stringifyComponent from '../utils/stringify-component';

export default function(component, key) {
  return computed(hash(key), hash => stringifyComponent(component, hash));
}
