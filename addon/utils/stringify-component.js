export default function stringifyComponent(component, hash) {
  return AFRAME.components[component].stringify(hash);
}
