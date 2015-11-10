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
      'form'   : 'addForm'
      }
  }

  splash() {
    this.current = 'splash';
  }
  addContent() {
    this.current = 'addContent';
  }
  searchContent() {
    this.current = 'searchContent';
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
  addForm() {
    this.current = 'addForm';
  }
  initialize() {
    Backbone.history.start();
  }
}

export default Router;
