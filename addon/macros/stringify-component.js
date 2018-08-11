import { computed } from 'ember-macro-helpers';
import { hash } from 'ember-awesome-macros';
import _stringifyComponent from '../utils/stringify-component';

export default function stringifyComponent(component, key) {
  return computed(hash(key), hash => _stringifyComponent(component, hash));
}
