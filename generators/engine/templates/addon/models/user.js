import DS from 'ember-data'
const { attr, belongsTo, hasMany, Model } = DS

export default Model.extend({
  dateJoined: attr('date'),
  directory: attr('string'),
  description: attr('string'),
  email: attr('string'),
  firstName: attr('string'),
  isActive: attr('boolean'),
  isInternal: attr('boolean'),
  lastLogin: attr('date'),
  lastlogintime: attr('string'), // Not a real attribute but needed to satisfy bunsen
  lastName: attr('string'),
  roles: hasMany('role'),
  roleslist: attr('string'), // Not a real data field but added to satisfy bunsen
  tenant: belongsTo('tenant'),
  username: attr('string')
})
