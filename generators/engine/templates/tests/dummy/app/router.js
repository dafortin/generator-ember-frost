import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.nav('application', function () {
    this.category('General', function () {
      this.column('Engines', function () {
        this.engine('UAC Engine', {
          description: 'Mounts and links-to the UAC Engine',
          package: 'ciena-uac-engine',
          route: 'uac'
        })
        this.link('Users', {
          url: 'uac/users'
        })
      })
    })
  })
})

export default Router
