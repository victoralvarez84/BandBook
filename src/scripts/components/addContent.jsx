import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';

export default class addContent extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    var user = new Parse.User();
    user.set("username", this.refs.username.value);
    user.set("password", this.refs.password.value);
    user.set("email", this.refs.email.value);

    user.signUp(null, {
      success: function(user) {
        Backbone.history.navigate(`/info`, true);
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });


  }

  render () {
    return (
      <div id="gameForm">
        <div className="container new-game">
          <div className="row row-centered">
              <div className="col-xs-6 col-centered">
                <h2 className="text-center"></h2>
              </div>
            </div>
            <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
            <form onSubmit={this.handleSubmit} role="form">

              <br></br>
              <br></br>

              <p className="textWhat">What do you want to add?</p>
              <select className="form-control" ref="difficulty">
                  <option>Add!</option>
                  <option>Promoters/Venues</option>
                  <option>Bands</option>
                  <option>Record Stores</option>
                  <option>Merch</option>
                  <option>Lodging</option>
                  <option>Vans for Sale</option>
                  <option>Tips</option>
                </select>

              <br></br>
              <br></br>
              <p className="text-center">
                <a href="#/register"><button type="button" class="btn btn-secondary">Continue!</button></a>
              </p>
            </form>
          </div>
        </div>
    );
  }
}
