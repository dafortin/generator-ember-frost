/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'sample-component',
  'Integration: SampleComponentComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#sample-component}}
      //     template content
      //   {{/sample-component}}
      // `);

      this.render(hbs`{{sample-component}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
