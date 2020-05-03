export default function toObject(emberObject) {
  return Object.keys(emberObject).reduce((obj, key) => {
    obj[key] = emberObject[key];
    return obj;
  }, {});
}
