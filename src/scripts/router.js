import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      ''       : 'splash',
      'add'    : 'addContent',
      'search' : 'searchContent',
      'data'   : 'dataStore',
      'about'  : 'aboutBB',
      'faq'    : 'faqContact',
      'choose' : 'chooseParam'
    }
  }

  splash() {
    this.current = 'splash';
  }
  addContent() {
    this.current = 'addContent';
  }
  serachContent() {
    this.current = 'serachContent';
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
  chooseParam(){
    this.current = 'chooseParam';
  }
  initialize() {
    Backbone.history.start();
  }
}

export default Router;
