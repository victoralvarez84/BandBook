import React from 'react';
import Backbone from 'backbone';

class searchContent extends React.Component {

  handleSubmit = () =>  {
      let players = this.refs.players.value;
      let duration = this.refs.duration.value;
      let difficulty = this.refs.difficulty.value;
      Backbone.history.navigate(
        `/results?players=${players}&duration=${duration}&difficulty=${difficulty}`,
        true
      );
    }

    render() {
      return (
        <div className='container info-collect'>
          <div className="row">
            <div className='content'>
                <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
                  <br></br>
                  <br></br>
                <p className="textWhereSearch">Where</p>
                <select className="form-control" ref="players">
                  <option>Anywhere!</option>
                  <option>Atlanta</option>
                  <option>Baltimore</option>
                  <option>Boston</option>
                  <option>Chicago</option>
                  <option>Houston</option>
                  <option>Los Angeles</option>
                  <option>New Orleans</option>
                  <option>New York City</option>
                  <option>Philadelphia</option>
                  <option>San Francisco</option>
                  <option>Tampa</option>
                </select>
                <br></br>
                <br></br>
                <p className="textWhatSearch">What</p>
                <select className="form-control" ref="difficulty">
                    <div className="choices">
                    <option>Anything!</option>
                    <option>Promoters/Venues</option>
                    <option>Bands</option>
                    <option>Record Stores</option>
                    <option>Merch</option>
                    <option>Lodging</option>
                    <option>Vans for Sale</option>
                    <option>Tips</option>
                    </div>
                  </select>
                </div>
                <br></br>
                <br></br>
                  <p className="text-center">
                    <a href="#/game/:id"><button type="button" class="btn btn-secondary">Search!</button></a>
                    </p>
              </div>
            </div>


      );

    }
  }

  export default searchContent;
