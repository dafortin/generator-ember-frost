/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha'
import { expect } from 'chai'
import { mockFindAll } from 'ember-data-factory-guy'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import page from '../pages/users'

describe('Acceptance: Users', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })

  it('can visit /uac/users', function () {
    mockFindAll('user', 3)

    page.visit()

    andThen(function () {
      expect(currentPath()).to.equal('uac.users')
    })
  })

  it('has 3 users', function () {
    mockFindAll('user', 3)

    page.visit()

    andThen(function () {
      expect(page.userCount).to.equal(3)
    })
  })
})
