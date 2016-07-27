import {
  create,
  count,
  visitable
} from 'ember-cli-page-object'
import { hook } from 'ember-hook'

export default create({
  visit: visitable('/uac/users'),
  userCount: count(hook('userRecord'))
})
