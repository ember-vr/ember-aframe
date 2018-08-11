import { computed } from 'ember-macro-helpers';
import { hash } from 'ember-awesome-macros';
import _stringifyCoordinates from '../utils/stringify-coordinates';

export default function stringifyCoordinates(...args) {
  if (args.length === 1) {
    args[0] = hash(args[0]);
  }
  return computed(...args, _stringifyCoordinates);
}
