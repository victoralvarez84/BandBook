import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';
import Icon from './Icon';

class NavigationItem extends React.Component {

  render() {
    let className;
    if (this.props.current)
      className = 'active';

    return (
      <li className={className}>
        <a href={this.props.to}>
          {this.props.icon
            ? <Icon type={this.props.icon}/>
            : ''}
          {' '}
          {this.props.label}
        </a>
      </li>
    );
  }
}

class SessionNavigation extends React.Component {

  handleSignOut = () => {
    Parse.User.logOut();
    Backbone.history.navigate('/', true);
  }

  handleSignIn = (event) => {
    event.preventDefault();
    Parse.User.logIn(this.refs.username.value, this.refs.password.value, {
      success: function(user) {
        Backbone.history.navigate('/info', true);
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    if (this.props.user) {
      return (
        <ul className = "nav navbar-nav navbar-right">
          <li>
            <a href="#" onClick={this.handleSignOut} >
              <Icon type="user"/>
              {' '}
              Sign Out
            </a>
          </li>
        </ul>
      )
    } else {
      return (
        <div>


        </div>
      );
    }
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <NavigationItem current={this.props.current === 'serach'} label="SEARCH" to="#/search"/>
              <NavigationItem current={this.props.current === 'add'}  label="ADD" to="#/add"/>
              <NavigationItem current={this.props.current === 'about'}  label="ABOUT" to="#/about"/>
              <NavigationItem current={this.props.current === 'faq'}  label="FAQ" to="#/faq"/>


            </ul>
            <SessionNavigation user={this.props.currentUser}/>
          </div>
        </div>
      </nav >);
    }
  }

  export default Navigation;
