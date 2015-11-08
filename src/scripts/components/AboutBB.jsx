import React from 'react';
import Parse from 'parse';
import Icon from './Icon';
// import SearchDetail from './SearchDetail';
import BandBook from '../bandBook';

class AboutBB extends React.Component {

  constructor(props) {
    super(props);
    this.query = new Parse.Query(Game);
    this.state = {
      players: Number(this.params('players')),
      duration: Number(this.params('duration')),
      difficulty: this.params('difficulty'),
      games: []
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
            backBone: results
          });
        }
      });
  }

  render () {
    let details = this.state
      .games
      .map((game, i) => {
        return <SearchDetail game={game} key={i}/>;
      });

    return (
      <div className='container info-collect'>
        <div className="row">
          <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
            <div className='fadeImage'>
              <div className='text'>
              <h5>WHAT</h5>
              <h4>IF</h4>
              <h3>BOOKING</h3>
              <h2>WAS</h2>
              <h1>EASY?</h1>
              </div>
             </div>
            <div className="infoBoxes">

                <div className='book'>BOOK A TOUR
                 <br></br>
                 <br></br>
                 <i className="fa fa-bus fa-3x"></i>
                 <br></br>
                 <br></br>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <br></br>
               <br></br>
               <br></br>
               <p>ADD YOURSELF!</p>
               <br></br>
               <i className="fa fa-plus-square fa-3x"></i>
               <br></br>
               <br></br>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <br></br>
               <br></br>
               <br></br>
               <p>CONNECT WITH OTHERS!</p>
               <br></br>
               <i className="fa fa-users fa-3x"></i>
               <br></br>
               <br></br>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

               </div>



             </div>
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
