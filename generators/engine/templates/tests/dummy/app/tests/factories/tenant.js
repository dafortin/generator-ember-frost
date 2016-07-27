import FactoryGuy from 'ember-data-factory-guy'

FactoryGuy.define('tenant', {
  default: {
  },

  tenant_all_attrs: {
    createdTime: () => faker.date.past(),
    description: () => faker.lorem.sentences(),
    displayName: () => faker.commerce.productName(),
    isActive: () => faker.random.boolean(),
    isMaster: () => faker.random.boolean(),
    modifiedTime: () => faker.date.past(),
    name: () => faker.commerce.productName(),
    parent: null
  }
})
