/* jshint expr:true */
/*global visit, andThen, currentPath, capture*/
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'

describe('Acceptance: Uac', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })

  it('can visit /uac', function (done) {
    visit('/uac')

    andThen(function () {
      expect(currentPath()).to.equal('uac.index')
      capture('uac-visit').then(function (data) {
        console.log(arguments)
        done()
      }).catch(function (err) {
        done(err)
      })
    })
  })
})
