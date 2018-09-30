import Component from 'ember-aframe/components/a-entity';
import layout from '../templates/components/a-entity-loaded-test';
import { on } from '@ember/object/evented';

export default Component.extend({
  layout,

  _loaded: on('loaded', function() {
    this.set('isLoaded', true);
  })
});
