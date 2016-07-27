import { Scenario } from 'ember-data-factory-guy'

export default class extends Scenario {
  run () {
    let users = this.buildList('user', 3)
    users.get()
    this.mockFindAll('user').returns({ json: users })
    // this.mockFindAll('user', 3)
    this.mockDelete('user')
  }
}
