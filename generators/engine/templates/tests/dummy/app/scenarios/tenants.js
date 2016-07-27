import { Scenario } from 'ember-data-factory-guy'

export default class extends Scenario {
  run () {
    this.mockFind('tenant')
    this.mockFindAll('tenant', 5)
    this.mockDelete('tenant')
  }
}
