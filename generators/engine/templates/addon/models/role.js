import DS from 'ember-data'
const { attr, Model } = DS

export default Model.extend({
  createdTime: attr('date'),
  description: attr('string'),
  displayName: attr('string'),
  isInternal: attr('boolean'),
  modifiedTime: attr('date'),
  name: attr('string')
})
