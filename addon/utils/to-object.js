import { get } from '@ember/object';

export default function toObject(emberObject) {
  return Object.keys(emberObject).reduce((obj, key) => {
    obj[key] = get(emberObject, key);
    return obj;
  }, {});
}
