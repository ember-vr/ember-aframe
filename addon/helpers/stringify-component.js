import { helper } from '@ember/component/helper';
import _stringifyComponent from '../utils/stringify-component';

export default helper(function stringifyComponent([component], hash) {
  return _stringifyComponent(component, hash);
});
