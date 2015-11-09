import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'splash',
      'search' : 'searchContent',
      'data': 'dataStore',
      'about':'AboutBB',
      'faq':'faqContact',
    }
  }

  Splash() {
    this.current = 'Splash';
  }
  serachContent() {
    this.current = 'serachContent';
  }
  dataStore() {
    this.current = 'DataStore';
  }
  aboutBB() {
    this.current = 'aboutBB';
  }
  faqContact() {
    this.current = 'faqContact';
  }
  initialize() {
    Backbone.history.start();
  }
}

export default Router;
