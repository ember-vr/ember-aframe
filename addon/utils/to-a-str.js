export default function(hash) {
  return Object.keys(hash).map(key => {
    return `${key}: ${hash[key]}`;
  }).join('; ');
}
