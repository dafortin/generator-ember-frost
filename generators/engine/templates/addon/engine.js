import Engine from 'ember-engines/engine'
import Resolver from 'ember-engines/resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'

const { modulePrefix, podModulePrefix } = config

const engine = Engine.extend({
  modulePrefix,
  podModulePrefix,
  Resolver
})

loadInitializers(engine, modulePrefix)

export default engine
