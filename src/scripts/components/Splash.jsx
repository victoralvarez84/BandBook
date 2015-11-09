import React from 'react';
import Backbone from 'backbone';

class Splash extends React.Component {

  handleSubmit = () => {
    Backbone.history
      .navigate(`/splash`, true);
  }

  componentDidMount() {
    //  $("#splashtext").delay(1000).fadeIn(1000);
    //   $("#startnow").delay(2000).fadeIn(1500);
    // $("#introcopy").delay(2500).fadeIn(2000);
  }

  render() {
    return (
      <div className="container splashcontainer">
        <div className="centerBlock">
          <button id="startnow" onClick={this.handleSubmit}></button>
          </div>
        </div>
      );
  }
}

export default Splash;
