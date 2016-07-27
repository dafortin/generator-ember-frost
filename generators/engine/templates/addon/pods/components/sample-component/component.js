import Ember from 'ember'
const {
  Component
} = Ember
import layout from './template'
import styles from './styles'

export default Component.extend({
  classNameBindings: ['styles.root'],
  layout,
  styles
})
