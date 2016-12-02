import React, { Component } from 'react';
import App from '../App.css';
import { Link, IndexLink } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <nav id="homebar">
          <ul>
          <li><IndexLink to="/" activeClassName='active'>SportsApp</IndexLink></li>
          <li><Link to="startsit" activeClassName='active'>StartSit</Link></li>
          <li><Link to="rankings" activeClassName='active'>Rankings</Link></li>
          <li><Link to="stats" activeClassName='active'>Stats</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Home;
