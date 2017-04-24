import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow(){
      this.set('addNewAnnouncement', true);
    },
    saveAnnouncement(){
      var params = {
        date: this.get('date'),
        message: this.get('message')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
