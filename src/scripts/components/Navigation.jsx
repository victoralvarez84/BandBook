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
              <NavigationItem current={this.props.current === '#'}  label="HOME" to="#"/>
              <NavigationItem current={this.props.current === 'info'}  label="ADD" to="#/new"/>
              <NavigationItem current={this.props.current === 'about'} label="ABOUT" to="#/results"/>
              <NavigationItem current={this.props.current === 'faqs'} label="SUCK ME  & FUCK ME" to="#/empty"/>
          </ul>

          </div>
        </div>
      </nav >);
    }
  }

  export default Navigation;
