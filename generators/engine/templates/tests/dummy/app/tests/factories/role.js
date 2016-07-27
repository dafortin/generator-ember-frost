/* global faker*/
import FactoryGuy from 'ember-data-factory-guy'

FactoryGuy.define('role', {
  sequences: {
    name: (num) => {
      let items = ['app', 'uacuiapp', 'admin', 'sysadmin', 'user']
      return items[num % items.length]
    }
  },

  default: {
    name: FactoryGuy.generate('name')
  },

  role_all_attrs: {
    application: () => faker.random.uuid(),
    createdTime: () => faker.date.past(),
    description: () => faker.lorem.sentences(),
    displayName: FactoryGuy.generate('name'),
    isInternal: () => faker.random.boolean(),
    modifiedTime: () => faker.date.past(),
    name: FactoryGuy.generate('name'),
    parents: []
  }
})
