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
import AddForm from './addForm';



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
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    console.log(this.state);

    switch (this.state.currentRoute) {
      case 'splash' :
        currentView = <Splash />;
        break;
      case 'searchContent' :
        currentView = <SearchContent />;
        break;
      case 'aboutBB' :
        currentView = <AboutBB />;
        break;
      case 'dataStore' :
        currentView = <DataStore />;
        break;
      case 'faqContact' :
        currentView = <FaqContact />;
        break;
      case 'addContent' :
        currentView = <AddContent />;
        break;
      case 'addForm' :
          currentView = <AddForm />;
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
        <a href="https://www.github.com/victoralvarez84"><div className="fa fa-github-square fa-4x"></div></a>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
