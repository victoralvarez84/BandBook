import React from 'react';
import Parse from 'parse';
import Navigation from './Navigation';
import Splash from './Splash';
import SearchContent from './searchContent';
import AboutBB from './AboutBB';
import DataStore from './dataStore';
import FaqContact from './faqContact';
import AddContent from './addContent';
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
      case 'splash' :
        currentView = <splash />;
        break;
      case 'searchContent' :
        currentView = <serachContent />;
        break;
      case 'aboutBB' :
        currentView = <aboutBB />;
        break;
      case 'dataStore' :
        currentView = <dataStore />;
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
        <a href="https://instagram.com/livingdecent/"><div className="fa fa-instagram fa-4x"></div></a>
        <a href="https://twitter.com/VicAlvarez84"><div className="fa fa-twitter-square fa-4x"></div></a>
        <a href="https://www.facebook.com/Livingdecent/"><div className="fa fa-facebook-square fa-4x"></div></a>
        <a href="https://www.linkedin.com/pub/victor-alvarez/2a/814/587"><div className="fa fa-github-square fa-4x"></div></a>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
