export default function stringify(hash) {
  return Object.keys(hash).map(key => {
    return `${key}: ${hash[key]}`;
  }).join('; ');
}
