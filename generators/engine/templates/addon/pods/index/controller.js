import Ember from 'ember'
const {
  Controller
} = Ember
import layout from './template'
import styles from './styles'

export default Controller.extend({

  // == Properties ============================================================

  isRed: false,
  layout,
  styles,

  // == Actions ===============================================================

  actions: {
    toggleColor () {
      this.toggleProperty('isRed')
    }
  }
})
