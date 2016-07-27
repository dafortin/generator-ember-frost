import { module } from 'qunit'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import {mockSetup, mockTeardown} from 'ember-data-factory-guy'

export default function (name, options = {}) {
  module(name, {
    beforeEach () {
      this.application = startApp()

      // Adding FactoryGuy mockSetup call
      mockSetup()

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments)
      }
    },

    afterEach () {
      destroyApp(this.application)

      // Adding FactoryGuy mockTeardown call
      mockTeardown()

      if (options.afterEach) {
        options.afterEach.apply(this, arguments)
      }
    }
  })
}
