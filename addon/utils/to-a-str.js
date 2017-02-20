export default function(hash) {
  // return Object.keys(hash).map(key => {
  //   return `${key}: ${hash[key]}`;
  // }).join('; ');
  return AFRAME.components.animation.stringify(hash);
}
