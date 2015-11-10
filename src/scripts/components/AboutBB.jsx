import React from 'react';
import Parse from 'parse';
import Icon from './Icon';
// import SearchDetail from './SearchDetail';
import BandBook from '../bandBook';

class AboutBB extends React.Component {

  constructor(props) {
    super(props);
    this.query = new Parse.Query(BandBook);
    this.state = {
    bandBook: []
    };
  }

  componentWillMount() {
    this.query.lessThanOrEqualTo('minPlayers', this.state.players);
    this.query.greaterThanOrEqualTo('maxPlayers', this.state.players);
    this.query.lessThanOrEqualTo('duration', this.state.duration);
    this.query.equalTo('difficulty', this.state.difficulty);
    // This part is not functioning but I wanted to keep the concept
    //     switch (this.state.difficulty) {
    //       case 'advanced':
    //         this.query.equalTo('difficulty', ('advanced' && 'intermediate' && 'beginner'));
    //         break;
    //       case 'intermediate':
    //         this.query.equalTo('difficulty', ('intermediate' && 'beginner'));
    //       default:
    //         this.query.equalTo('difficulty', 'beginner');
    // };
    this.query
      .find({
        success: (results) => {
          this.setState({
            bandBook: results
          });
        }
      });
  }

  render () {
    let details = this.state
      .bandBook
      .map((band, i) => {
        return <SearchDetail game={band} key={i}/>;
      });

    return (
      <div className="infoBoxes">
        <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
          <div className='bookTour'><h1>BOOK A TOUR</h1>
              <i className="fa fa-bus fa-3x"></i>
          </div>
          <div className='addYourself'>
              <h1>ADD YOURSELF!</h1>
              <i className="fa fa-plus-square fa-3x"></i>
          </div>
          <div className='leaveRating'>
            <h1>LEAVE A RATING!</h1>
            <i className="fa fa-star fa-3x"></i>
          </div>
        </div>
      );
  }

  params(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

export default AboutBB;
