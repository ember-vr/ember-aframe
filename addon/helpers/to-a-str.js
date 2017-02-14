import { helper } from 'ember-helper';
import toAStr from 'ember-a-frame/utils/to-a-str';

export default helper((params, hash) => {
  return toAStr(hash);
});
