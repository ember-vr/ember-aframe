import computed from 'ember-macro-helpers/computed';
import hash from 'ember-awesome-macros/hash';
import stringify from 'ember-aframe/utils/stringify';

export default function(key) {
  return computed(hash(key), stringify).readOnly();
}
