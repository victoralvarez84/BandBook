import Parse from 'parse';

export default class bandBook extends Parse.Object {

  constructor() {
    super('bandBook');
  }
}

window.bandBook = bandBook;
