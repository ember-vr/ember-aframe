import { curriedComputed } from 'ember-macro-helpers';
import stringifyCoordinates from '../utils/stringify-coordinates';

export default curriedComputed(stringifyCoordinates);
