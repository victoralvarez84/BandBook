import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';
import chooseParam from 'chooseParam';

export default class EmptyField extends React.Component {
   handleSubmit = () => {
     Backbone.history.navigate( `/faq`, true);
   }

  render () {
    return <div className="container">
      <div className="contactBox">
        <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
        <br></br>
        <br></br>
        <div className="contact"><a href='#/game/${game.id}'><p>CONTACT</p></a></div>
        <div className="faq"><a href='#'><p>FAQ</p></a></div>
        <div className="team"><a href='#'><p>TEAM</p></a></div>
      </div>
      </div>

  }
}
