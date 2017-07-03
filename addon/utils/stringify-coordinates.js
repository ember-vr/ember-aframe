import AFrame from 'aframe';

const { stringify } = AFrame.utils.coordinates;

export default function() {
  if (arguments.length === 1) {
    return stringify(arguments[0]);
  }

  return stringify({
    x: arguments[0],
    y: arguments[1],
    z: arguments[2]
  });
}
