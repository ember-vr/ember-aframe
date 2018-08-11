import { computed } from 'ember-macro-helpers';
import { hash } from 'ember-awesome-macros';
import _stringify from '../utils/stringify';

export default function stringify(key) {
  return computed(hash(key), _stringify);
}
