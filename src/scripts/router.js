import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'search' : 'searchContent',
      'data': 'dataStore',
      'choose':'chooseParam',
      'about':'aboutBB',
      'faq':'faqContact',
      'add':'addContent'
    }
  }

  index() {
    this.current = 'index';
  }
  searchContent() {
    this.current = 'serachContent';
  }
  chooseParam() {
    this.current = 'chooseParam';
  }
  dataStore() {
    this.current = 'dataStore';
  }
  aboutBB() {
    this.current = 'aboutBB';
  }
  faqContact() {
    this.current = 'faqContact';
  }
  addContent() {
    this.current = 'addContent';
  }
}

export default Router;
