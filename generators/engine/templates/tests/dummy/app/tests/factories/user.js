import FactoryGuy from 'ember-data-factory-guy'

FactoryGuy.define('user', {
  sequences: {
    directory: (num) => {
      let items = ['Local', 'LDAP', 'RADIUS']
      return items[num % items.length]
    }
  },

  default: {
    dateJoined: () => faker.date.past(),
    directory: FactoryGuy.generate('directory'),
    description: () => faker.lorem.sentence(),
    email: () => faker.internet.email(),
    firstName: () => faker.name.firstName(),
    isActive: () => faker.random.boolean(),
    isInternal: () => faker.random.boolean(),
    lastLoginDetail: {
      ipAddress: () => {
        return faker.internet.ip()
      },
      time: () => {
        return faker.date.past()
      }
    },
    lastName: () => faker.name.lastName(),
    roles: FactoryGuy.hasMany('role', 2),
    tenant: FactoryGuy.belongsTo('tenant'),
    tokenExpirationTime: null,
    usergroups: [],
    username: () => faker.internet.userName()
  }
})
