import { curriedComputed } from 'ember-macro-helpers';
import parseCoordinates from '../utils/parse-coordinates';

export default curriedComputed(parseCoordinates);
