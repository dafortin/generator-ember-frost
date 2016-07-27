import DS from 'ember-data'
const { attr, Model } = DS

export default Model.extend({
  createdTime: attr('date'),
  description: attr('string'),
  displayName: attr('string'),
  isActive: attr('boolean'),
  isMaster: attr('boolean'),
  modifiedTime: attr('date'),
  name: attr('string')
})
