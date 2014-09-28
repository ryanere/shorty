import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string', { async: true }),
  token: DS.attr('string', { async: true })
});
