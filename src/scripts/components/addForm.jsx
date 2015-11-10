import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';

export default class addForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    var user = new Parse.User();
    user.set("username", this.refs.username.value);
    user.set("password", this.refs.password.value);
    user.set("email", this.refs.email.value);

    user.signUp(null, {
      success: function(user) {
        Backbone.history.navigate(`/add`, true);
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });


  }

  render () {
    return (
      <div className="formAddPage">
        <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
        <div className="inputBox">
          <label className="nameProject">Name of Project:
           <input className="textForm" id="nameProject" />
          </label>
         <label for="address">Address:
           <input className="textForm" id="address" />
         </label>
         <label for="city">City:
          <input className="textForm" id="city" />
          </label>
          <label for="state">State:
            <input className="textForm" id="state" />
          </label>
          <label for="zipCode">Zip Code:
            <input className="textForm" id="zipcode" />
          </label>
          <label for="contactName">Contact Name:
            <input className="textForm" id="contactName" />
          </label>
          <label for="email">E-mail:
            <input className="textForm" id="email" />
          </label>
          <label for="description">Description:
            <input className="textForm" id="description" />
          </label>
          <div className="continueBox">
          <a href="#/data"><button type="button" className="btn">Continue</button></a>
          </div>
      </div>
    </div>

    );
  }
}
