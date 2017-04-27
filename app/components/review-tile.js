import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(review) {
      if(confirm('Are you sure?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});
