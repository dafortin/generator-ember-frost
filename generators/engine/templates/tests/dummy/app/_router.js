import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.mount('<%- appName %>', {
    as: '<%- appName %>'
  })
})

export default Router
