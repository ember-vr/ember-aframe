import { computed } from 'ember-macro-helpers';
import { hash } from 'ember-awesome-macros';
import stringify from '../utils/stringify';

export default function(key) {
  return computed(hash(key), stringify);
}
