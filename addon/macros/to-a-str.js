import computed from 'ember-macro-helpers/computed';
import hash from 'ember-awesome-macros/hash';
import toAStr from 'ember-a-frame/utils/to-a-str';

export default function(key) {
  return computed(hash(key), toAStr).readOnly();
}
