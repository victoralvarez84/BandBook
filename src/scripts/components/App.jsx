import React from 'react';
import Parse from 'parse';
import Navigation from './Navigation';
import Splash from './Splash';
import chooseParam from './chooseParam';
import searchContent from './searchContent';
import aboutBB from './aboutBB';
import dataStore from './dataStore';
import faqContact from './faqContact';
import addContent from './addContent';
import Icon from './Icon';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: Parse.User.current(),
      currentRoute: props.router.current
    }
  }

  componentWillMount() {
    this.props
      .router
      .on('route', this.onRoute);
  }

  componentWillUnmount() {
    this.props
      .router
      .off('route', this.onRoute);
  }

  onRoute = () => {
    $('.navbar-toggle').click();
    this.setState({
      currentUser: Parse.User.current(),
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    switch (this.state.currentRoute) {
      case 'chooseParam' :
        currentView = <chooseParam />;
        break;
      case 'searchContent' :
        currentView = <serachContent />;
        break;
      case 'aboutBB' :
        currentView = <aboutBB />;
        break;
      case 'dataStore' :
        currentView = <dataStore game_id={this.props.router.game_id} />;
        break;
      case 'faqContact' :
        currentView = <faqContact />;
        break;
      case 'addContent' :
        currentView = <addContent />;
        break;
     default :
      currentView = <Splash/>;
    }

    return (
      <div>
        <Navigation current={this.state.currentRoute} currentUser={this.state.currentUser}/>
        {currentView}
        <footer className="footer">
        <div className="container-footer">
        <a href="#"><div className="fa fa-instagram fa-2x"></div></a>
        <a href="#"><div className="fa fa-twitter-square fa-2x"></div></a>
        <a href="#"><div className="fa fa-facebook-square fa-2x"></div></a>
        <a href="#"><div className="fa fa-github-square fa-2x"></div></a>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
